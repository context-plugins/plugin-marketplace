from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DefaultUndefinedFault(SdkBaseModel):
    message: Optional[str] = UNSET


class DefaultUndefinedFaultDict(TypedDict):
    message: NotRequired[str]
