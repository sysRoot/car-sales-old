export const BUY_ITEM = "BUY_ITEM";

export function buyItem(feature) {
    return {
        type: BUY_ITEM,
        payload: feature
    };
}
