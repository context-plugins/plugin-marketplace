from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class User(SdkBaseModel):
    id: Optional[int] = UNSET
    firstname: OptionalNullable[str] = UNSET
    lastname: OptionalNullable[str] = UNSET
    createdon: Optional[RFC3339DateTime] = UNSET
    email: OptionalNullable[str] = UNSET
    phone_number: OptionalNullable[str] = Field(default=UNSET, alias="phoneNumber")
    mobile: OptionalNullable[str] = UNSET
    referral_code: OptionalNullable[str] = Field(default=UNSET, alias="referralCode")


class UserDict(TypedDict):
    id: NotRequired[int]
    firstname: NotRequired[str | None]
    lastname: NotRequired[str | None]
    createdon: NotRequired[RFC3339DateTime]
    email: NotRequired[str | None]
    phone_number: NotRequired[str | None]
    mobile: NotRequired[str | None]
    referral_code: NotRequired[str | None]
