from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.property_type_google_analytics_admin_account_summaries_api import (
    PropertyTypeGoogleAnalyticsAdminAccountSummariesApiOrStr,
)


class GoogleAnalyticsAdminV1BetaPropertySummary(SdkBaseModel):
    """A virtual resource representing metadata for a Google Analytics property."""

    property: Optional[str] = UNSET
    """Resource name of property referred to by this property summary Format: properties/{property_id} Example:
    "properties/1000"
    """

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Display name for the property referred to in this property summary."""

    property_type: Optional[PropertyTypeGoogleAnalyticsAdminAccountSummariesApiOrStr] = Field(
        default=UNSET, alias="propertyType"
    )
    """The property's property type."""

    parent: Optional[str] = UNSET
    """Resource name of this property's logical parent. Note: The Property-Moving UI can be used to change the parent.
    Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/200"
    """

    can_edit: Optional[bool] = Field(default=UNSET, alias="canEdit")
    """If true, then the user has a Google Analytics role that permits them to edit the property."""


class GoogleAnalyticsAdminV1BetaPropertySummaryDict(TypedDict):
    property: NotRequired[str]
    display_name: NotRequired[str]
    property_type: NotRequired[PropertyTypeGoogleAnalyticsAdminAccountSummariesApiOrStr]
    parent: NotRequired[str]
    can_edit: NotRequired[bool]
