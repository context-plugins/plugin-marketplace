from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StatusMessage(SdkBaseModel):
    status: Optional[str] = UNSET
    message: Optional[str] = UNSET


class StatusMessageDict(TypedDict):
    status: NotRequired[str]
    message: NotRequired[str]
