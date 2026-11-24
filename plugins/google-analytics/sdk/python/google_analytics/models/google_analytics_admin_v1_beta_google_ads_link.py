from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaGoogleAdsLink(SdkBaseModel):
    """A link between a Google Analytics property and a Google Ads account."""

    name: Optional[str] = UNSET
    """Identifier. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the
    Google Ads customer ID."""

    creator_email_address: Optional[str] = Field(default=UNSET, alias="creatorEmailAddress")
    """Output only. Email address of the user that created the link. An empty string will be returned if the email
    address can't be retrieved."""

    customer_id: Optional[str] = Field(default=UNSET, alias="customerId")
    """Immutable. Google Ads customer ID."""

    ads_personalization_enabled: Optional[bool] = Field(default=UNSET, alias="adsPersonalizationEnabled")
    """Enable personalized advertising features with this integration. Automatically publish my Google Analytics
    audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is
    not set on create/update, it will be defaulted to true."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Time when this link was originally created."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Time when this link was last updated."""

    can_manage_clients: Optional[bool] = Field(default=UNSET, alias="canManageClients")
    """Output only. If true, this link is for a Google Ads manager account."""


class GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict(TypedDict):
    name: NotRequired[str]
    creator_email_address: NotRequired[str]
    customer_id: NotRequired[str]
    ads_personalization_enabled: NotRequired[bool]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    can_manage_clients: NotRequired[bool]
