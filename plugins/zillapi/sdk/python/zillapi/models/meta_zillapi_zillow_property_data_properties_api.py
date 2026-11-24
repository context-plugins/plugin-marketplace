from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetaZillapiZillowPropertyDataPropertiesApi(SdkBaseModel):
    count: Optional[int] = UNSET
    photo_count: Optional[int] = UNSET
    has_3d: Optional[bool] = UNSET
    has_video: Optional[bool] = UNSET


class MetaZillapiZillowPropertyDataPropertiesApiDict(TypedDict):
    count: NotRequired[int]
    photo_count: NotRequired[int]
    has_3d: NotRequired[bool]
    has_video: NotRequired[bool]
