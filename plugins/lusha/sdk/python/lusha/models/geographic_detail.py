from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GeographicDetail(SdkBaseModel):
    country: Optional[str] = UNSET
    zipcode: Optional[str] = UNSET
    distance: Optional[int] = UNSET
    """Radius in miles."""


class GeographicDetailDict(TypedDict):
    country: NotRequired[str]
    zipcode: NotRequired[str]
    distance: NotRequired[int]
