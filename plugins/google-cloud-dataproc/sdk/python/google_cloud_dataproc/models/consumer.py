from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Consumer(SdkBaseModel):
    """Contains information of the customer's network configurations."""

    endpoint_location: Optional[str] = Field(default=UNSET, alias="endpointLocation")
    """Output only. The location of the endpoint URI. Format: projects/{project}/locations/{location}."""

    endpoint_uri: Optional[str] = Field(default=UNSET, alias="endpointUri")
    """Output only. The URI of the endpoint used to access the metastore service."""

    subnetwork: Optional[str] = UNSET
    """Immutable. The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc
    Metastore service's endpoint. It is accessible to hosts in the subnet and to all hosts in a subnet in the same
    region and same network. There must be at least one IP address available in the subnet's primary range. The subnet
    is specified in the following form:projects/{project_number}/regions/{region_id}/subnetworks/{subnetwork_id}"""


class ConsumerDict(TypedDict):
    endpoint_location: NotRequired[str]
    endpoint_uri: NotRequired[str]
    subnetwork: NotRequired[str]
