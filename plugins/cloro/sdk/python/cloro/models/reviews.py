from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .product_review import ProductReview, ProductReviewDict


class Reviews(SdkBaseModel):
    summary: Optional[str] = UNSET
    reviews: Optional[list[ProductReview]] = UNSET


class ReviewsDict(TypedDict):
    summary: NotRequired[str]
    reviews: NotRequired[list[ProductReviewDict]]
