from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Storage503Error(SdkBaseModel):
    error: Optional[str] = UNSET


class Storage503ErrorDict(TypedDict):
    error: NotRequired[str]
