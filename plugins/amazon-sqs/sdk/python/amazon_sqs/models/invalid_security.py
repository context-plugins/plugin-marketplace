from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidSecurity(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidSecurityDict(TypedDict):
    message: NotRequired[str]
