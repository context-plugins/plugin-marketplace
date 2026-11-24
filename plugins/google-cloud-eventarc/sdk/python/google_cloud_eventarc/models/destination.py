from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_run2 import CloudRun2, CloudRun2Dict
from .gke2 import Gke2, Gke2Dict
from .http_endpoint2 import HttpEndpoint2, HttpEndpoint2Dict
from .network_config2 import NetworkConfig2, NetworkConfig2Dict


class Destination(SdkBaseModel):
    """Represents a target of an invocation over HTTP."""

    gke: Optional[Gke2] = UNSET
    """A GKE service capable of receiving events. The service should be running in the same project as the trigger."""

    network_config: Optional[NetworkConfig2] = Field(default=UNSET, alias="networkConfig")
    """Optional. Network config is used to configure how Eventarc resolves and connect to a destination. This should
    only be used with HttpEndpoint destination type."""

    cloud_run: Optional[CloudRun2] = Field(default=UNSET, alias="cloudRun")
    """Cloud Run fully-managed resource that receives the events. The resource should be in the same project as the
    trigger."""

    http_endpoint: Optional[HttpEndpoint2] = Field(default=UNSET, alias="httpEndpoint")
    """An HTTP endpoint destination described by an URI."""

    cloud_function: Optional[str] = Field(default=UNSET, alias="cloudFunction")
    """The Cloud Function resource name. Cloud Functions V1 and V2 are supported. Format:
    ``projects/{project}/locations/{location}/functions/{function}`` This is a read-only field. Creating Cloud Functions
    V1/V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this
    value."""

    workflow: Optional[str] = UNSET
    """The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be
    deployed in the same project as the trigger. Format:
    ``projects/{project}/locations/{location}/workflows/{workflow}``"""


class DestinationDict(TypedDict):
    gke: NotRequired[Gke2Dict]
    network_config: NotRequired[NetworkConfig2Dict]
    cloud_run: NotRequired[CloudRun2Dict]
    http_endpoint: NotRequired[HttpEndpoint2Dict]
    cloud_function: NotRequired[str]
    workflow: NotRequired[str]
