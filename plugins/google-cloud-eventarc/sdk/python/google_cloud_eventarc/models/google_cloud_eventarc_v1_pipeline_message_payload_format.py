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


class GoogleCloudEventarcV1PipelineMessagePayloadFormat(SdkBaseModel):
    """Represents the format of message data."""

    protobuf: Optional[GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2] = UNSET
    """Optional. Protobuf format."""

    avro: Optional[GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1] = UNSET
    """Optional. Avro format."""

    json_value: Optional[Any] = Field(default=UNSET, alias="json")
    """Optional. JSON format."""


class GoogleCloudEventarcV1PipelineMessagePayloadFormatDict(TypedDict):
    protobuf: NotRequired[GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2Dict]
    avro: NotRequired[GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1Dict]
    json_value: NotRequired[Any]
