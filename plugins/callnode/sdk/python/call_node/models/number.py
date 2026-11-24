from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Number(SdkBaseModel):
    id: Optional[str] = UNSET
    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """Plus sign followed by 7–15 digits."""

    area_name: OptionalNullable[str] = Field(default=UNSET, alias="areaName")
    area_code: OptionalNullable[str] = Field(default=UNSET, alias="areaCode")
    deliver_to: Optional[str] = Field(default=UNSET, alias="deliverTo")


class NumberDict(TypedDict):
    id: NotRequired[str]
    phone_number: NotRequired[str]
    area_name: NotRequired[str | None]
    area_code: NotRequired[str | None]
    deliver_to: NotRequired[str]
