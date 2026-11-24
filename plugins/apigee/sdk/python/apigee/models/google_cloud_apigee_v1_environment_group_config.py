from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_endpoint_chaining_rule import (
    GoogleCloudApigeeV1EndpointChainingRule,
    GoogleCloudApigeeV1EndpointChainingRuleDict,
)
from .google_cloud_apigee_v1_routing_rule import GoogleCloudApigeeV1RoutingRule, GoogleCloudApigeeV1RoutingRuleDict


class GoogleCloudApigeeV1EnvironmentGroupConfig(SdkBaseModel):
    """EnvironmentGroupConfig is a revisioned snapshot of an EnvironmentGroup and its associated routing rules."""

    endpoint_chaining_rules: Optional[list[GoogleCloudApigeeV1EndpointChainingRule]] = Field(
        default=UNSET, alias="endpointChainingRules"
    )
    """A list of proxies in each deployment group for proxy chaining calls."""

    hostnames: Optional[list[str]] = UNSET
    """Host names for the environment group."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """Revision id that defines the ordering of the EnvironmentGroupConfig resource. The higher the revision, the more
    recently the configuration was deployed."""

    routing_rules: Optional[list[GoogleCloudApigeeV1RoutingRule]] = Field(default=UNSET, alias="routingRules")
    """Ordered list of routing rules defining how traffic to this environment group's hostnames should be routed to
    different environments."""

    location: Optional[str] = UNSET
    """When this message appears in the top-level IngressConfig, this field will be populated in lieu of the inlined
    routing_rules and hostnames fields. Some URL for downloading the full EnvironmentGroupConfig for this group."""

    uid: Optional[str] = UNSET
    """A unique id for the environment group config that will only change if the environment group is deleted and
    recreated."""

    name: Optional[str] = UNSET
    """Name of the environment group in the following format: ``organizations/{org}/envgroups/{envgroup}``."""


class GoogleCloudApigeeV1EnvironmentGroupConfigDict(TypedDict):
    endpoint_chaining_rules: NotRequired[list[GoogleCloudApigeeV1EndpointChainingRuleDict]]
    hostnames: NotRequired[list[str]]
    revision_id: NotRequired[str]
    routing_rules: NotRequired[list[GoogleCloudApigeeV1RoutingRuleDict]]
    location: NotRequired[str]
    uid: NotRequired[str]
    name: NotRequired[str]
