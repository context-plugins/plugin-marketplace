from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.industry_category import IndustryCategoryOrStr
from .enums.property_type import PropertyTypeOrStr
from .enums.service_level import ServiceLevelOrStr


class GoogleAnalyticsAdminV1BetaProperty(SdkBaseModel):
    """A resource message representing a Google Analytics property."""

    property_type: Optional[PropertyTypeOrStr] = Field(default=UNSET, alias="propertyType")
    """Immutable. The property type for this Property resource. When creating a property, if the type is
    "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied."""

    account: Optional[str] = UNSET
    """Immutable. The resource name of the parent account Format: accounts/{account_id} Example: "accounts/123"
    """

    expire_time: Optional[str] = Field(default=UNSET, alias="expireTime")
    """Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this
    property is not currently in the trash can and is not slated to be deleted."""

    service_level: Optional[ServiceLevelOrStr] = Field(default=UNSET, alias="serviceLevel")
    """Output only. The Google Analytics service level that applies to this property."""

    parent: Optional[str] = UNSET
    """Immutable. Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change
    the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101"
    """

    industry_category: Optional[IndustryCategoryOrStr] = Field(default=UNSET, alias="industryCategory")
    """Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code
    units."""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217
    Examples: "USD", "EUR", "JPY"
    """

    time_zone: Optional[str] = Field(default=UNSET, alias="timeZone")
    """Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If
    the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only
    affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example:
    "America/Los_Angeles"
    """

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Time when the entity was originally created."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Time when entity payload fields were last updated."""

    name: Optional[str] = UNSET
    """Identifier. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"
    """

    delete_time: Optional[str] = Field(default=UNSET, alias="deleteTime")
    """Output only. If set, the time at which this property was trashed. If not set, then this property is not currently
    in the trash can."""


class GoogleAnalyticsAdminV1BetaPropertyDict(TypedDict):
    property_type: NotRequired[PropertyTypeOrStr]
    account: NotRequired[str]
    expire_time: NotRequired[str]
    service_level: NotRequired[ServiceLevelOrStr]
    parent: NotRequired[str]
    industry_category: NotRequired[IndustryCategoryOrStr]
    display_name: NotRequired[str]
    currency_code: NotRequired[str]
    time_zone: NotRequired[str]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    name: NotRequired[str]
    delete_time: NotRequired[str]
