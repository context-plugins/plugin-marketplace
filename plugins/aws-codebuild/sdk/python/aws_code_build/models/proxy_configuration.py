from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.default_behavior import DefaultBehaviorOrStr
from .fleet_proxy_rule import FleetProxyRule, FleetProxyRuleDict


class ProxyConfiguration(SdkBaseModel):
    default_behavior: Optional[DefaultBehaviorOrStr] = Field(default=UNSET, alias="defaultBehavior")
    """The default behavior of outgoing traffic."""

    ordered_proxy_rules: Optional[list[FleetProxyRule]] = Field(default=UNSET, alias="orderedProxyRules")
    """An array of FleetProxyRule objects that represent the specified destination domains or IPs to allow or deny
    network access control to."""


class ProxyConfigurationDict(TypedDict):
    default_behavior: NotRequired[DefaultBehaviorOrStr]
    ordered_proxy_rules: NotRequired[list[FleetProxyRuleDict]]
