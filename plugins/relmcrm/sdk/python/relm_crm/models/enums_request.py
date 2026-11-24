from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EnumsRequest(SdkBaseModel):
    group: str
    value: str
    label: Optional[str] = UNSET


class EnumsRequestDict(TypedDict):
    group: str
    value: str
    label: NotRequired[str]
