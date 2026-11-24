from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Review(SdkBaseModel):
    count: Optional[int] = UNSET
    """Number of reviews"""

    rating: Optional[float] = UNSET
    """Average rating"""

    provider_name: Optional[str] = Field(default=UNSET, alias="providerName")
    """Review provider name"""

    provider_icon_url: Optional[str] = Field(default=UNSET, alias="providerIconUrl")
    """Provider icon URL"""

    url: Optional[str] = UNSET
    """Reviews page URL"""


class ReviewDict(TypedDict):
    count: NotRequired[int]
    rating: NotRequired[float]
    provider_name: NotRequired[str]
    provider_icon_url: NotRequired[str]
    url: NotRequired[str]
