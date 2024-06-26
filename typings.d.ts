type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
    _type: string;
}

interface Post extends Base {
    author: Author;
    categories: Category[];
    body: Block[] | YoutubeEmbed;
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
    youtube: YoutubeEmbed;
}

interface Author extends Base {
    name: string;
    slug: Slug;
    image: Image;
    bio: Block[];
    categories: Category[];
    body: Block[];
    mainImage: Image;
    title: string;
    description: string;
    CodeBlock: CodeBlock;
}

interface CodeNode {
    language?: string;
    code?: string;
    highlightedLines?: number[];
}

interface CodeBlock extends Block {
    _type: "code";
    codeNode: CodeNode;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Block {
    _type: "block";
    _key: string;
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _type: "span";
    _key: string;
    marks: string[];
    text: string;
}

interface Category extends Base {
    title: string;
    description: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}

interface YoutubeEmbed {
    _type: "youtube";
    url: string;
}