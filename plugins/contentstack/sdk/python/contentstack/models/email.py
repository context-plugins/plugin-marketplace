from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Email(SdkBaseModel):
    value: Optional[EmailStr] = UNSET
    """The email address value."""

    primary: Optional[bool] = UNSET
    """Indicates whether this is the primary email address."""


class EmailDict(TypedDict):
    value: NotRequired[EmailStr]
    primary: NotRequired[bool]
