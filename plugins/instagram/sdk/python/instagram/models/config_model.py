from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConfigModel(SdkBaseModel):
    quota_total: Optional[int] = UNSET
    quota_duration: Optional[int] = UNSET


class ConfigModelDict(TypedDict):
    quota_total: NotRequired[int]
    quota_duration: NotRequired[int]
