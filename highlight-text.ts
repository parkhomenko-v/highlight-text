export type IHighlightType = [
    string,
    string | undefined,
    string | undefined
];

function highlight(input: string, search: string): IHighlightType {
    const regex = new RegExp(`(^|)${search}(|$)`, 'gi');
    const index = input.search(regex);

    if (index >= 0) {
        const before = input.slice(0, index);
        const highlighted = input.slice(index, index + search.length);
        const after = input.slice(index + search.length, input.length);

        return [
            before,
            highlighted,
            after
        ];
    }

    return [
        input,
        undefined,
        undefined
    ];
}

export default highlight;
