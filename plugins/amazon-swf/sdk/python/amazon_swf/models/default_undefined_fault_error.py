from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DefaultUndefinedFaultError(SdkBaseModel):
    message: Optional[str] = UNSET


class DefaultUndefinedFaultErrorDict(TypedDict):
    message: NotRequired[str]
