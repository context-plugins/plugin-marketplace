from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_eventarc_v1_pipeline_destination_authentication_config2 import (
    GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig2,
    GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig2Dict,
)
from .google_cloud_eventarc_v1_pipeline_destination_http_endpoint1 import (
    GoogleCloudEventarcV1PipelineDestinationHttpEndpoint1,
    GoogleCloudEventarcV1PipelineDestinationHttpEndpoint1Dict,
)
from .google_cloud_eventarc_v1_pipeline_destination_network_config2 import (
    GoogleCloudEventarcV1PipelineDestinationNetworkConfig2,
    GoogleCloudEventarcV1PipelineDestinationNetworkConfig2Dict,
)
from .google_cloud_eventarc_v1_pipeline_message_payload_format3 import (
    GoogleCloudEventarcV1PipelineMessagePayloadFormat3,
    GoogleCloudEventarcV1PipelineMessagePayloadFormat3Dict,
)


class GoogleCloudEventarcV1PipelineDestination(SdkBaseModel):
    """Represents a target of an invocation over HTTP."""

    workflow: Optional[str] = UNSET
    """Optional. The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource
    should be deployed in the same project as the Pipeline. Format:
    ``projects/{project}/locations/{location}/workflows/{workflow}``"""

    network_config: Optional[GoogleCloudEventarcV1PipelineDestinationNetworkConfig2] = Field(
        default=UNSET, alias="networkConfig"
    )
    """Optional. Network config is used to configure how Pipeline resolves and connects to a destination."""

    http_endpoint: Optional[GoogleCloudEventarcV1PipelineDestinationHttpEndpoint1] = Field(
        default=UNSET, alias="httpEndpoint"
    )
    """Optional. An HTTP endpoint destination described by an URI. If a DNS FQDN is provided as the endpoint, Pipeline
    will create a peering zone to the consumer VPC and forward DNS requests to the VPC specified by network config to
    resolve the service endpoint. See: https://cloud.google.com/dns/docs/zones/zones-overview#peering_zones"""

    message_bus: Optional[str] = Field(default=UNSET, alias="messageBus")
    """Optional. The resource name of the Message Bus to which events should be published. The Message Bus resource
    should exist in the same project as the Pipeline. Format:
    ``projects/{project}/locations/{location}/messageBuses/{message_bus}``"""

    authentication_config: Optional[GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig2] = Field(
        default=UNSET, alias="authenticationConfig"
    )
    """Optional. An authentication config used to authenticate message requests, such that destinations can verify the
    source. For example, this can be used with private Google Cloud destinations that require Google Cloud credentials
    for access like Cloud Run. This field is optional and should be set only by users interested in authenticated
    push."""

    output_payload_format: Optional[GoogleCloudEventarcV1PipelineMessagePayloadFormat3] = Field(
        default=UNSET, alias="outputPayloadFormat"
    )
    """Optional. The message format before it is delivered to the destination. If not set, the message will be delivered
    in the format it was originally delivered to the Pipeline. This field can only be set if
    Pipeline.input_payload_format is also set."""

    topic: Optional[str] = UNSET
    """Optional. The resource name of the Pub/Sub topic to which events should be published. Format:
    ``projects/{project}/locations/{location}/topics/{topic}``"""


class GoogleCloudEventarcV1PipelineDestinationDict(TypedDict):
    workflow: NotRequired[str]
    network_config: NotRequired[GoogleCloudEventarcV1PipelineDestinationNetworkConfig2Dict]
    http_endpoint: NotRequired[GoogleCloudEventarcV1PipelineDestinationHttpEndpoint1Dict]
    message_bus: NotRequired[str]
    authentication_config: NotRequired[GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig2Dict]
    output_payload_format: NotRequired[GoogleCloudEventarcV1PipelineMessagePayloadFormat3Dict]
    topic: NotRequired[str]
