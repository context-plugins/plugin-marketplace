from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudRun2(SdkBaseModel):
    """Cloud Run fully-managed resource that receives the events. The resource should be in the same project as the
    trigger."""

    service: Optional[str] = UNSET
    """Required. The name of the Cloud Run service being addressed. See
    https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project
    as the trigger object can be addressed."""

    region: Optional[str] = UNSET
    """Required. The region the Cloud Run service is deployed in."""

    path: Optional[str] = UNSET
    """Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the
    definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute"."""


class CloudRun2Dict(TypedDict):
    service: NotRequired[str]
    region: NotRequired[str]
    path: NotRequired[str]
