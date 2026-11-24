from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute(SdkBaseModel):
    """Route deployed in the ingress routing table."""

    basepath: Optional[str] = UNSET
    """Base path in the routing table."""

    percentage: Optional[int] = UNSET
    """Percentage of ingress replicas reporting this route."""

    environment: Optional[str] = UNSET
    """Destination environment. This will be empty if the route is not yet reported."""

    envgroup: Optional[str] = UNSET
    """Environment group where this route is installed."""


class GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRouteDict(TypedDict):
    basepath: NotRequired[str]
    percentage: NotRequired[int]
    environment: NotRequired[str]
    envgroup: NotRequired[str]
