from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Sipaccount4(SdkBaseModel):
    label: Optional[str] = UNSET
    """Account label/name"""

    password: Optional[str] = UNSET
    """SIP password"""

    callerid: Optional[str] = UNSET
    """Caller ID to display on outbound calls"""

    rewrite_enabled: Optional[bool] = UNSET
    """Enable number rewriting"""

    rewrite_cond: Optional[str] = UNSET
    """Rewrite condition pattern (regular expression)"""

    rewrite_prefix: Optional[str] = UNSET
    """Prefix to add when rewriting numbers"""

    didinfo_enabled: Optional[bool] = UNSET
    """Enable DID info in SIP headers"""

    ip_restrict: Optional[bool] = UNSET
    """Restrict access by IP address (requires allowed IPs)"""

    call_restrict: Optional[bool] = UNSET
    """Enable the per-call duration limit"""

    call_limit: Optional[int] = UNSET
    """Maximum call duration in seconds"""

    channels_restrict: Optional[bool] = UNSET
    """Enable concurrent channel limits"""

    max_channels: Optional[int] = UNSET
    """Maximum concurrent channels allowed"""

    cost_limit: Optional[bool] = UNSET
    """Enable maximum call cost limit"""

    max_call_cost: Optional[int] = UNSET
    """Maximum allowed cost per call in cents"""

    spend_limit_enabled: Optional[bool] = UNSET
    """Enable total spending limit. Switching a disabled limit back on restarts it: the full limit is available again,
    counted from now"""

    spend_limit: Optional[int] = UNSET
    """Maximum total spend amount in cents"""

    reset_available_amount: Optional[int] = UNSET
    """Amount available for spend limit reset in cents"""

    call_recording_enabled: Optional[bool] = UNSET
    """Enable or disable recording of outbound calls made via a selected SIP account"""


class Sipaccount4Dict(TypedDict):
    label: NotRequired[str]
    password: NotRequired[str]
    callerid: NotRequired[str]
    rewrite_enabled: NotRequired[bool]
    rewrite_cond: NotRequired[str]
    rewrite_prefix: NotRequired[str]
    didinfo_enabled: NotRequired[bool]
    ip_restrict: NotRequired[bool]
    call_restrict: NotRequired[bool]
    call_limit: NotRequired[int]
    channels_restrict: NotRequired[bool]
    max_channels: NotRequired[int]
    cost_limit: NotRequired[bool]
    max_call_cost: NotRequired[int]
    spend_limit_enabled: NotRequired[bool]
    spend_limit: NotRequired[int]
    reset_available_amount: NotRequired[int]
    call_recording_enabled: NotRequired[bool]
