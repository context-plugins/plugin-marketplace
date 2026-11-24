from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform import PlatformOrStr


class WarningModel(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    platform: Optional[PlatformOrStr] = UNSET
    doc_url: Optional[str] = Field(default=UNSET, alias="docUrl")


class WarningModelDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    platform: NotRequired[PlatformOrStr]
    doc_url: NotRequired[str]
