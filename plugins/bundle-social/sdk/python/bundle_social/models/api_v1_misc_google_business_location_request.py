from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .categories import Categories, CategoriesDict
from .latlng import Latlng, LatlngDict
from .more_hour import MoreHour, MoreHourDict
from .phone_numbers import PhoneNumbers, PhoneNumbersDict
from .profile import Profile, ProfileDict
from .regular_hours import RegularHours, RegularHoursDict
from .special_hours import SpecialHours, SpecialHoursDict
from .storefront_address import StorefrontAddress, StorefrontAddressDict


class ApiV1MiscGoogleBusinessLocationRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    validate_only: Optional[bool] = Field(default=UNSET, alias="validateOnly")
    title: OptionalNullable[str] = UNSET
    profile: OptionalNullable[Profile] = UNSET
    website_uri: OptionalNullable[str] = Field(default=UNSET, alias="websiteUri")
    phone_numbers: OptionalNullable[PhoneNumbers] = Field(default=UNSET, alias="phoneNumbers")
    categories: OptionalNullable[Categories] = UNSET
    storefront_address: OptionalNullable[StorefrontAddress] = Field(default=UNSET, alias="storefrontAddress")
    regular_hours: OptionalNullable[RegularHours] = Field(default=UNSET, alias="regularHours")
    special_hours: OptionalNullable[SpecialHours] = Field(default=UNSET, alias="specialHours")
    more_hours: OptionalNullable[list[MoreHour]] = Field(default=UNSET, alias="moreHours")
    open_info: OptionalNullable[Any] = Field(default=UNSET, alias="openInfo")
    service_area: OptionalNullable[Any] = Field(default=UNSET, alias="serviceArea")
    latlng: OptionalNullable[Latlng] = UNSET


class ApiV1MiscGoogleBusinessLocationRequestDict(TypedDict):
    team_id: str
    validate_only: NotRequired[bool]
    title: NotRequired[str | None]
    profile: NotRequired[ProfileDict | None]
    website_uri: NotRequired[str | None]
    phone_numbers: NotRequired[PhoneNumbersDict | None]
    categories: NotRequired[CategoriesDict | None]
    storefront_address: NotRequired[StorefrontAddressDict | None]
    regular_hours: NotRequired[RegularHoursDict | None]
    special_hours: NotRequired[SpecialHoursDict | None]
    more_hours: NotRequired[list[MoreHourDict] | None]
    open_info: NotRequired[Any | None]
    service_area: NotRequired[Any | None]
    latlng: NotRequired[LatlngDict | None]
