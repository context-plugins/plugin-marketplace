from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TemplatesRequest(SdkBaseModel):
    name: str
    key: Optional[str] = UNSET
    subject: Optional[str] = UNSET
    html: str
    text: Optional[str] = UNSET


class TemplatesRequestDict(TypedDict):
    name: str
    key: NotRequired[str]
    subject: NotRequired[str]
    html: str
    text: NotRequired[str]
