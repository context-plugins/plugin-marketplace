from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Mitigation(SdkBaseModel):
    code: Optional[str] = UNSET
    text: Optional[str] = UNSET


class MitigationDict(TypedDict):
    code: NotRequired[str]
    text: NotRequired[str]
