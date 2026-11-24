from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccount(SdkBaseModel):
    """A resource message representing a Google Analytics account."""

    gmp_organization: Optional[str] = Field(default=UNSET, alias="gmpOrganization")
    """Output only. The URI for a Google Marketing Platform organization resource. Only set when this account is
    connected to a GMP organization. Format: marketingplatformadmin.googleapis.com/organizations/{org_id}"""

    name: Optional[str] = UNSET
    """Identifier. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
    """

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Human-readable display name for this account."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. Time when account payload fields were last updated."""

    region_code: Optional[str] = Field(default=UNSET, alias="regionCode")
    """Country of business. Must be a Unicode CLDR region code."""

    deleted: Optional[bool] = UNSET
    """Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List
    results unless specifically requested."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Time when this account was originally created."""


class GoogleAnalyticsAdminV1BetaAccountDict(TypedDict):
    gmp_organization: NotRequired[str]
    name: NotRequired[str]
    display_name: NotRequired[str]
    update_time: NotRequired[str]
    region_code: NotRequired[str]
    deleted: NotRequired[bool]
    create_time: NotRequired[str]
