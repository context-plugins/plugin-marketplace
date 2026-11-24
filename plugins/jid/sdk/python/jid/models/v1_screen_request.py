from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.context_jid_screen_api import ContextJidScreenApiOrStr
from .enums.policy_jid_screen_api import PolicyJidScreenApi, PolicyJidScreenApiOrStr


class V1ScreenRequest(SdkBaseModel):
    domain: Optional[str] = UNSET
    url: Optional[str] = UNSET
    """Only the host is used."""

    email: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    """Ideally +E.164."""

    company_name: Optional[str] = UNSET
    name: Optional[str] = UNSET
    """A person's name: accepted, never looked up."""

    context: Optional[ContextJidScreenApiOrStr] = UNSET
    """Default lead, or purchase when only a url or domain is given."""

    policy: PolicyJidScreenApiOrStr = PolicyJidScreenApi.BALANCED
    amount: Optional[float] = UNSET
    """USD at stake"""

    country: Optional[str] = UNSET
    """Default country for a phone number without +"""

    retain: Optional[bool] = UNSET
    """Keep the receipt 13 months instead of 30 days"""

    ip_country: Optional[str] = UNSET
    """Location check: country of the request (e.g. x-vercel-ip-country)"""

    ip_region: Optional[str] = UNSET
    """Location check: ISO 3166-2 region of the request"""

    ip_city: Optional[str] = UNSET
    """Accepted, not compared, not stored"""

    ip_asn: Optional[int] = UNSET
    """Location check: ASN of the request's network (hosting/VPN recognition)"""

    ip: Optional[str] = UNSET
    """Optional raw IP: used in memory for the Tor and ASN lookups only, never stored or returned"""

    browser_timezone: Optional[str] = UNSET
    """Location check: IANA time zone from the browser"""

    stated_country: Optional[str] = UNSET
    """Location check: the country the counterparty stated"""

    signal: Optional[str] = UNSET
    """Jid Signals token from the visitor's browser (the jid_signal form field set by https://jid.com/s/1.js; jid_signal
    is also accepted). When it verifies, its country, region, city, network type and time zone replace the ip_* fields
    and browser_timezone. Expired, altered or other-site tokens are skipped, never negative. See /signals."""

    site: Optional[str] = UNSET
    """The submitting website's domain. Binds the signal token loosely: a token issued to another site is skipped."""


class V1ScreenRequestDict(TypedDict):
    domain: NotRequired[str]
    url: NotRequired[str]
    email: NotRequired[str]
    phone: NotRequired[str]
    company_name: NotRequired[str]
    name: NotRequired[str]
    context: NotRequired[ContextJidScreenApiOrStr]
    policy: NotRequired[PolicyJidScreenApiOrStr]
    amount: NotRequired[float]
    country: NotRequired[str]
    retain: NotRequired[bool]
    ip_country: NotRequired[str]
    ip_region: NotRequired[str]
    ip_city: NotRequired[str]
    ip_asn: NotRequired[int]
    ip: NotRequired[str]
    browser_timezone: NotRequired[str]
    stated_country: NotRequired[str]
    signal: NotRequired[str]
    site: NotRequired[str]
