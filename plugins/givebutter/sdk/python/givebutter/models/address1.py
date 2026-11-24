from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Address1(SdkBaseModel):
    id: Optional[int] = UNSET
    address_1: OptionalNullable[str] = UNSET
    address_2: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET
    state: OptionalNullable[str] = UNSET
    zipcode: OptionalNullable[str] = UNSET
    country: OptionalNullable[str] = UNSET
    is_primary: Optional[bool] = UNSET


class Address1Dict(TypedDict):
    id: NotRequired[int]
    address_1: NotRequired[str | None]
    address_2: NotRequired[str | None]
    city: NotRequired[str | None]
    state: NotRequired[str | None]
    zipcode: NotRequired[str | None]
    country: NotRequired[str | None]
    is_primary: NotRequired[bool]
