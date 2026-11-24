from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidSecurityError(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidSecurityErrorDict(TypedDict):
    message: NotRequired[str]
