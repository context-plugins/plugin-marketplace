from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Email(SdkBaseModel):
    email: Optional[str] = UNSET
    is_primary: Optional[bool] = UNSET
    is_verified: Optional[bool] = UNSET


class EmailDict(TypedDict):
    email: NotRequired[str]
    is_primary: NotRequired[bool]
    is_verified: NotRequired[bool]
