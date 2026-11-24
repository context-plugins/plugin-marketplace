from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_prisma_reviews_locations_api import TypePrismaReviewsLocationsApiOrStr


class ReviewLink(SdkBaseModel):
    url: str
    """The link."""

    type_: TypePrismaReviewsLocationsApiOrStr = Field(alias="type")


class ReviewLinkDict(TypedDict):
    url: str
    type_: TypePrismaReviewsLocationsApiOrStr
