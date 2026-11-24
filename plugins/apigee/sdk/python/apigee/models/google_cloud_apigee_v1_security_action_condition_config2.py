from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityActionConditionConfig2(SdkBaseModel):
    """Required. A valid SecurityAction must contain at least one condition."""

    api_products: Optional[list[str]] = Field(default=UNSET, alias="apiProducts")
    """Optional. A list of API Products. Limit 1000 per action."""

    user_agents: Optional[list[str]] = Field(default=UNSET, alias="userAgents")
    """Optional. A list of user agents to deny. We look for exact matches. Limit 50 per action."""

    developer_apps: Optional[list[str]] = Field(default=UNSET, alias="developerApps")
    """Optional. A list of developer apps. Limit 1000 per action."""

    ip_address_ranges: Optional[list[str]] = Field(default=UNSET, alias="ipAddressRanges")
    """Optional. A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action."""

    bot_reasons: Optional[list[str]] = Field(default=UNSET, alias="botReasons")
    """Optional. A list of Bot Reasons. Current options: Flooder, Brute Guessor, Static Content Scraper, OAuth Abuser,
    Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper, Search Engine Crawlers, Public Clouds,
    Public Cloud AWS, Public Cloud Azure, and Public Cloud Google."""

    http_methods: Optional[list[str]] = Field(default=UNSET, alias="httpMethods")
    """Optional. Act only on particular HTTP methods. E.g. A read-only API can block POST/PUT/DELETE methods. Accepted
    values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH."""

    developers: Optional[list[str]] = UNSET
    """Optional. A list of developers. Limit 1000 per action."""

    access_tokens: Optional[list[str]] = Field(default=UNSET, alias="accessTokens")
    """Optional. A list of access_tokens. Limit 1000 per action."""

    asns: Optional[list[str]] = UNSET
    """Optional. A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet)
    This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types."""

    api_keys: Optional[list[str]] = Field(default=UNSET, alias="apiKeys")
    """Optional. A list of API keys. Limit 1000 per action."""

    region_codes: Optional[list[str]] = Field(default=UNSET, alias="regionCodes")
    """Optional. A list of countries/region codes to act on, e.g. US. This follows
    https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2."""


class GoogleCloudApigeeV1SecurityActionConditionConfig2Dict(TypedDict):
    api_products: NotRequired[list[str]]
    user_agents: NotRequired[list[str]]
    developer_apps: NotRequired[list[str]]
    ip_address_ranges: NotRequired[list[str]]
    bot_reasons: NotRequired[list[str]]
    http_methods: NotRequired[list[str]]
    developers: NotRequired[list[str]]
    access_tokens: NotRequired[list[str]]
    asns: NotRequired[list[str]]
    api_keys: NotRequired[list[str]]
    region_codes: NotRequired[list[str]]
