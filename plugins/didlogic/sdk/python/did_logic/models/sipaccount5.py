from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Sipaccount5(SdkBaseModel):
    """Updated SIP account details"""

    id: int
    """Unique SIP account identifier"""

    name: str
    """SIP account username"""

    callerid: str
    """Caller ID"""

    label: str
    """Account label"""

    host: str
    """SIP server host"""

    rewrite_enabled: bool
    """Whether number rewriting is enabled"""

    rewrite_cond: str
    """Rewrite condition pattern (regular expression)"""

    rewrite_prefix: str
    """Prefix to add when rewriting numbers"""

    didinfo_enabled: bool
    """Whether DID info is included in SIP headers"""

    ip_restrict: bool
    """Whether access is restricted by IP address"""

    call_restrict: bool
    """Whether the per-call duration limit is enabled"""

    call_limit: int
    """Maximum call duration in seconds"""

    channels_restrict: bool
    """Whether concurrent channel limits are enabled"""

    max_channels: int
    """Maximum number of concurrent channels allowed"""

    cost_limit: bool
    """Whether maximum call cost limit is enabled"""

    max_call_cost: str
    """Maximum allowed cost per call"""

    created_at: str
    """Account creation timestamp"""

    charge: str
    """Total charges accumulated on this account"""

    talk_time: int
    """Total talk time in seconds"""

    low_balance: bool
    """Whether account has low balance"""

    spend_limit: str
    """Maximum total spend amount"""

    spend_limit_enabled: bool
    """Whether spending limit is enabled"""

    available_amount: str
    """Amount available for spending"""

    call_recording_enabled: bool
    allowed_ips: list[Any]
    """List of IP addresses allowed to authenticate"""


class Sipaccount5Dict(TypedDict):
    id: int
    name: str
    callerid: str
    label: str
    host: str
    rewrite_enabled: bool
    rewrite_cond: str
    rewrite_prefix: str
    didinfo_enabled: bool
    ip_restrict: bool
    call_restrict: bool
    call_limit: int
    channels_restrict: bool
    max_channels: int
    cost_limit: bool
    max_call_cost: str
    created_at: str
    charge: str
    talk_time: int
    low_balance: bool
    spend_limit: str
    spend_limit_enabled: bool
    available_amount: str
    call_recording_enabled: bool
    allowed_ips: list[Any]
