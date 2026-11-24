from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rationale import Rationale, RationaleDict
from .reviews import Reviews, ReviewsDict


class ProductDetails(SdkBaseModel):
    """Rationale and reviews from the product sheet"""

    rationale: Optional[Rationale] = UNSET
    reviews: Optional[Reviews] = UNSET


class ProductDetailsDict(TypedDict):
    rationale: NotRequired[RationaleDict]
    reviews: NotRequired[ReviewsDict]
