from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Gke2(SdkBaseModel):
    """A GKE service capable of receiving events. The service should be running in the same project as the trigger."""

    cluster: Optional[str] = UNSET
    """Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project
    as the trigger being created."""

    path: Optional[str] = UNSET
    """Optional. The relative path on the GKE service the events should be sent to. The value must conform to the
    definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute"."""

    namespace: Optional[str] = UNSET
    """Required. The namespace the GKE service is running in."""

    location: Optional[str] = UNSET
    """Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone
    (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters."""

    service: Optional[str] = UNSET
    """Required. Name of the GKE service."""


class Gke2Dict(TypedDict):
    cluster: NotRequired[str]
    path: NotRequired[str]
    namespace: NotRequired[str]
    location: NotRequired[str]
    service: NotRequired[str]
