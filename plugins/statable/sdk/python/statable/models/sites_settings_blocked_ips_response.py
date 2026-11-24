from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SitesSettingsBlockedIpsResponse(SdkBaseModel):
    blocked_ips: list[str]
    """Blocked client IPs, as strings. Note the asymmetry with PUT, which takes the bare array as its request body."""


class SitesSettingsBlockedIpsResponseDict(TypedDict):
    blocked_ips: list[str]
