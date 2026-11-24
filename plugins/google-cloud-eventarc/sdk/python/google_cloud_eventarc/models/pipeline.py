from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_eventarc_v1_pipeline_destination import (
    GoogleCloudEventarcV1PipelineDestination,
    GoogleCloudEventarcV1PipelineDestinationDict,
)
from .google_cloud_eventarc_v1_pipeline_mediation import (
    GoogleCloudEventarcV1PipelineMediation,
    GoogleCloudEventarcV1PipelineMediationDict,
)
from .google_cloud_eventarc_v1_pipeline_message_payload_format1 import (
    GoogleCloudEventarcV1PipelineMessagePayloadFormat1,
    GoogleCloudEventarcV1PipelineMessagePayloadFormat1Dict,
)
from .google_cloud_eventarc_v1_pipeline_retry_policy2 import (
    GoogleCloudEventarcV1PipelineRetryPolicy2,
    GoogleCloudEventarcV1PipelineRetryPolicy2Dict,
)
from .logging_config1 import LoggingConfig1, LoggingConfig1Dict


class Pipeline(SdkBaseModel):
    """A representation of the Pipeline resource."""

    destinations: Optional[list[GoogleCloudEventarcV1PipelineDestination]] = UNSET
    """Required. List of destinations to which messages will be forwarded. Currently, exactly one destination is
    supported per Pipeline."""

    annotations: Optional[dict[str, str]] = UNSET
    """Optional. User-defined annotations. See https://google.aip.dev/128#annotations."""

    uid: Optional[str] = UNSET
    """Output only. Server-assigned unique identifier for the Pipeline. The value is a UUID4 string and guaranteed to
    remain unchanged until the resource is deleted."""

    mediations: Optional[list[GoogleCloudEventarcV1PipelineMediation]] = UNSET
    """Optional. List of mediation operations to be performed on the message. Currently, only one Transformation
    operation is allowed in each Pipeline."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name of resource."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The last-modified time. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up
    to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"."""

    input_payload_format: Optional[GoogleCloudEventarcV1PipelineMessagePayloadFormat1] = Field(
        default=UNSET, alias="inputPayloadFormat"
    )
    """Optional. The payload format expected for the messages received by the Pipeline. If input_payload_format is set
    then any messages not matching this format will be treated as persistent errors. If input_payload_format is not set,
    then the message data will be treated as an opaque binary and no output format can be set on the Pipeline through
    the Pipeline.Destination.output_payload_format field. Any Mediations on the Pipeline that involve access to the data
    field will fail as persistent errors."""

    name: Optional[str] = UNSET
    """Identifier. The resource name of the Pipeline. Must be unique within the location of the project and must be in
    ``projects/{project}/locations/{location}/pipelines/{pipeline}`` format."""

    etag: Optional[str] = UNSET
    """Output only. This checksum is computed by the server based on the value of other fields, and might be sent only
    on create requests to ensure that the client has an up-to-date value before proceeding."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. User labels attached to the Pipeline that can be used to group resources. An object containing a list
    of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }."""

    satisfies_pzs: Optional[bool] = Field(default=UNSET, alias="satisfiesPzs")
    """Output only. Whether or not this Pipeline satisfies the requirements of physical zone separation"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The creation time. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
    nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"."""

    logging_config: Optional[LoggingConfig1] = Field(default=UNSET, alias="loggingConfig")
    """Optional. Config to control Platform Logging for Pipelines."""

    retry_policy: Optional[GoogleCloudEventarcV1PipelineRetryPolicy2] = Field(default=UNSET, alias="retryPolicy")
    """Optional. The retry policy to use in the pipeline."""

    crypto_key_name: Optional[str] = Field(default=UNSET, alias="cryptoKeyName")
    """Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data. If not
    set, an internal Google-owned key will be used to encrypt messages. It must match the pattern
    "projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}"."""


class PipelineDict(TypedDict):
    destinations: NotRequired[list[GoogleCloudEventarcV1PipelineDestinationDict]]
    annotations: NotRequired[dict[str, str]]
    uid: NotRequired[str]
    mediations: NotRequired[list[GoogleCloudEventarcV1PipelineMediationDict]]
    display_name: NotRequired[str]
    update_time: NotRequired[str]
    input_payload_format: NotRequired[GoogleCloudEventarcV1PipelineMessagePayloadFormat1Dict]
    name: NotRequired[str]
    etag: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    satisfies_pzs: NotRequired[bool]
    create_time: NotRequired[str]
    logging_config: NotRequired[LoggingConfig1Dict]
    retry_policy: NotRequired[GoogleCloudEventarcV1PipelineRetryPolicy2Dict]
    crypto_key_name: NotRequired[str]
