from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sentiment import SentimentOrStr
from .product_citation import ProductCitation, ProductCitationDict


class ProductReview(SdkBaseModel):
    """One review source from the product sheet"""

    source: Optional[str] = UNSET
    theme: Optional[str] = UNSET
    summary: Optional[str] = UNSET
    sentiment: Optional[SentimentOrStr] = UNSET
    citation: Optional[ProductCitation] = UNSET
    rating: Optional[float] = UNSET
    """Rating at the source. Not returned at the moment."""

    num_reviews: Optional[int] = Field(default=UNSET, alias="numReviews")
    """Number of reviews at the source. Not returned at the moment."""

    cite_url: Optional[str] = Field(default=UNSET, alias="citeUrl")
    """URL of the source. Not returned at the moment."""


class ProductReviewDict(TypedDict):
    source: NotRequired[str]
    theme: NotRequired[str]
    summary: NotRequired[str]
    sentiment: NotRequired[SentimentOrStr]
    citation: NotRequired[ProductCitationDict]
    rating: NotRequired[float]
    num_reviews: NotRequired[int]
    cite_url: NotRequired[str]
