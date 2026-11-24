from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IpSecurity(SdkBaseModel):
    threat_score: Optional[int] = UNSET
    is_tor: Optional[bool] = UNSET
    is_proxy: Optional[bool] = UNSET
    proxy_provider_names: Optional[list[str]] = UNSET
    proxy_confidence_score: Optional[int] = UNSET
    proxy_last_seen: Optional[str] = UNSET
    is_residential_proxy: Optional[bool] = UNSET
    is_vpn: Optional[bool] = UNSET
    vpn_provider_names: Optional[list[str]] = UNSET
    vpn_confidence_score: Optional[int] = UNSET
    vpn_last_seen: Optional[str] = UNSET
    is_relay: Optional[bool] = UNSET
    relay_provider_name: Optional[str] = UNSET
    is_anonymous: Optional[bool] = UNSET
    is_known_attacker: Optional[bool] = UNSET
    is_bot: Optional[bool] = UNSET
    is_spam: Optional[bool] = UNSET
    is_cloud_provider: Optional[bool] = UNSET
    cloud_provider_name: Optional[str] = UNSET


class IpSecurityDict(TypedDict):
    threat_score: NotRequired[int]
    is_tor: NotRequired[bool]
    is_proxy: NotRequired[bool]
    proxy_provider_names: NotRequired[list[str]]
    proxy_confidence_score: NotRequired[int]
    proxy_last_seen: NotRequired[str]
    is_residential_proxy: NotRequired[bool]
    is_vpn: NotRequired[bool]
    vpn_provider_names: NotRequired[list[str]]
    vpn_confidence_score: NotRequired[int]
    vpn_last_seen: NotRequired[str]
    is_relay: NotRequired[bool]
    relay_provider_name: NotRequired[str]
    is_anonymous: NotRequired[bool]
    is_known_attacker: NotRequired[bool]
    is_bot: NotRequired[bool]
    is_spam: NotRequired[bool]
    is_cloud_provider: NotRequired[bool]
    cloud_provider_name: NotRequired[str]
