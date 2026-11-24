from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Email1(SdkBaseModel):
    value: Optional[EmailStr] = UNSET
    """The email address."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The type of email (e.g., work)."""

    primary: Optional[bool] = UNSET
    """Whether this is the primary email."""


class Email1Dict(TypedDict):
    value: NotRequired[EmailStr]
    type_: NotRequired[str]
    primary: NotRequired[bool]
