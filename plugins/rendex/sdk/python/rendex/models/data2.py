from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.format3 import Format3OrStr


class Data2(SdkBaseModel):
    url: Optional[str] = UNSET
    format: Optional[Format3OrStr] = UNSET
    content: Optional[str] = UNSET
    title: Optional[str] = UNSET
    byline: Optional[str] = UNSET
    excerpt: Optional[str] = UNSET
    site_name: Optional[str] = Field(default=UNSET, alias="siteName")
    length: Optional[int] = UNSET
    load_time_ms: Optional[int] = Field(default=UNSET, alias="loadTimeMs")


class Data2Dict(TypedDict):
    url: NotRequired[str]
    format: NotRequired[Format3OrStr]
    content: NotRequired[str]
    title: NotRequired[str]
    byline: NotRequired[str]
    excerpt: NotRequired[str]
    site_name: NotRequired[str]
    length: NotRequired[int]
    load_time_ms: NotRequired[int]
