from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1EndpointChainingRule(SdkBaseModel):
    """EndpointChainingRule specifies the proxies contained in a particular deployment group, so that other deployment
    groups can find them in chaining calls."""

    deployment_group: Optional[str] = Field(default=UNSET, alias="deploymentGroup")
    """The deployment group to target for cross-shard chaining calls to these proxies."""

    proxy_ids: Optional[list[str]] = Field(default=UNSET, alias="proxyIds")
    """List of proxy ids which may be found in the given deployment group."""


class GoogleCloudApigeeV1EndpointChainingRuleDict(TypedDict):
    deployment_group: NotRequired[str]
    proxy_ids: NotRequired[list[str]]
