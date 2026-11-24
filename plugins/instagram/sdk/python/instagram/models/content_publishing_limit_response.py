from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .config_model import ConfigModel, ConfigModelDict


class ContentPublishingLimitResponse(SdkBaseModel):
    config: Optional[ConfigModel] = UNSET
    quota_usage: Optional[int] = UNSET


class ContentPublishingLimitResponseDict(TypedDict):
    config: NotRequired[ConfigModelDict]
    quota_usage: NotRequired[int]
