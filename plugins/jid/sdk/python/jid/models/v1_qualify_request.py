from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .context import Context, ContextDict
from .enums.policy import PolicyOrStr


class V1QualifyRequest(SdkBaseModel):
    email: str
    domain: Optional[str] = UNSET
    company_name: Optional[str] = UNSET
    context: Optional[Context] = UNSET
    ip_country: Optional[str] = UNSET
    """Location check: country of the request (e.g. x-vercel-ip-country). Stored."""

    ip_region: Optional[str] = UNSET
    """Location check: ISO 3166-2 region of the request (US-CA or CA). Stored."""

    ip_city: Optional[str] = UNSET
    """Accepted, not compared, not stored, not returned"""

    ip_asn: Optional[int] = UNSET
    """Location check: ASN of the request's network (hosting/VPN recognition). Not stored."""

    browser_timezone: Optional[str] = UNSET
    """Location check: IANA time zone from the browser. Compared, not stored."""

    stated_country: Optional[str] = UNSET
    """Location check: the country the submitter stated (same as context.country; either may be sent)"""

    ip: Optional[str] = UNSET
    """Optional raw IP: used in memory for the Tor and network lookups (Jid's Tor and GeoLite2 copies; IPinfo when
    enabled). Never stored, hashed or returned."""

    phone: Optional[str] = UNSET
    """Optional business phone: validity and country code (compared with the location), in memory only, never stored"""

    signal: Optional[str] = UNSET
    """Jid Signals token from the visitor's browser (the jid_signal form field set by https://jid.com/s/1.js; jid_signal
    is also accepted). When it verifies, its country, region, city, network type and time zone replace the ip_* fields
    and browser_timezone. Expired, altered or other-site tokens are skipped, never negative. See /signals."""

    site: Optional[str] = UNSET
    """The submitting website's domain. Binds the signal token loosely: a token issued to another site is skipped."""

    summary: Optional[bool] = UNSET
    """Add a short summary written only from the signals."""

    policy: Optional[PolicyOrStr] = UNSET
    """How cautious ``engage`` is. Default balanced."""

    retain: Optional[bool] = UNSET
    """Opt in to keeping the message with the result for 13 months (default: hash only, 30 days)."""


class V1QualifyRequestDict(TypedDict):
    email: str
    domain: NotRequired[str]
    company_name: NotRequired[str]
    context: NotRequired[ContextDict]
    ip_country: NotRequired[str]
    ip_region: NotRequired[str]
    ip_city: NotRequired[str]
    ip_asn: NotRequired[int]
    browser_timezone: NotRequired[str]
    stated_country: NotRequired[str]
    ip: NotRequired[str]
    phone: NotRequired[str]
    signal: NotRequired[str]
    site: NotRequired[str]
    summary: NotRequired[bool]
    policy: NotRequired[PolicyOrStr]
    retain: NotRequired[bool]
