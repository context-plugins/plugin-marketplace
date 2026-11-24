from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_eventarc_v1_pipeline_message_payload_format_avro_format1 import (
    GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1,
    GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1Dict,
)
from .google_cloud_eventarc_v1_pipeline_message_payload_format_protobuf_format2 import (
    GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2,
    GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2Dict,
)


class GoogleCloudEventarcV1PipelineMessagePayloadFormat1(SdkBaseModel):
    """Optional. The payload format expected for the messages received by the Pipeline. If input_payload_format is set
    then any messages not matching this format will be treated as persistent errors. If input_payload_format is not set,
    then the message data will be treated as an opaque binary and no output format can be set on the Pipeline through
    the Pipeline.Destination.output_payload_format field. Any Mediations on the Pipeline that involve access to the data
    field will fail as persistent errors."""

    protobuf: Optional[GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2] = UNSET
    """Optional. Protobuf format."""

    avro: Optional[GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1] = UNSET
    """Optional. Avro format."""

    json_value: Optional[Any] = Field(default=UNSET, alias="json")
    """Optional. JSON format."""


class GoogleCloudEventarcV1PipelineMessagePayloadFormat1Dict(TypedDict):
    protobuf: NotRequired[GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2Dict]
    avro: NotRequired[GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1Dict]
    json_value: NotRequired[Any]
