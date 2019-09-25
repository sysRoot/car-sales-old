export const BUY_ITEM = "BUY_ITEM";
export const REM_ITEM = "REM_ITEM"

export function buyItem(feature) {
    return {
        type: BUY_ITEM,
        payload: feature
    };
}

export function removeFeature(feature) {
    return {
        type: REM_ITEM,
        payload: feature
    };
}