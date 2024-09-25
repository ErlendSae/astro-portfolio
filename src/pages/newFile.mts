import { bucketItem } from "./BucketList.astro.0.mts";

if (bucketItem) {
bucketItem.addEventListener('click', () => {
bucketItem.classList.toggle('line-through');
});
}
