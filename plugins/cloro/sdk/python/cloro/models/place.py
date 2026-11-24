from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Place(SdkBaseModel):
    index: int
    """Position index of the place in the results"""

    title: str
    """Place name"""

    link: str
    """Google URL for the place"""

    thumbnail: Optional[str] = UNSET
    """Place photo URL"""

    rating: Optional[float] = UNSET
    """Star rating (0-5)"""

    reviews: Optional[int] = UNSET
    """Number of reviews"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Place type or category"""

    description: Optional[str] = UNSET
    """Short description of the place"""

    price: Optional[str] = UNSET
    """Nightly price as Gemini displays it"""


class PlaceDict(TypedDict):
    index: int
    title: str
    link: str
    thumbnail: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[int]
    type_: NotRequired[str]
    description: NotRequired[str]
    price: NotRequired[str]
