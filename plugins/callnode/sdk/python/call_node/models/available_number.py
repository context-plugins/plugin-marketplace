from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.type3 import Type3OrStr


class AvailableNumber(SdkBaseModel):
    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """Plus sign followed by 7–15 digits."""

    type_: Optional[Type3OrStr] = Field(default=UNSET, alias="type")
    city: OptionalNullable[str] = UNSET
    region: OptionalNullable[str] = UNSET
    """State/province."""

    rate_center: OptionalNullable[str] = Field(default=UNSET, alias="rateCenter")


class AvailableNumberDict(TypedDict):
    phone_number: NotRequired[str]
    type_: NotRequired[Type3OrStr]
    city: NotRequired[str | None]
    region: NotRequired[str | None]
    rate_center: NotRequired[str | None]
