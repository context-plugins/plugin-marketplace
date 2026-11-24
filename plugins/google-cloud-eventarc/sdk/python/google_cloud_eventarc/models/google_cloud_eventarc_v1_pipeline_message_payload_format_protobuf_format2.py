from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2(SdkBaseModel):
    """Optional. Protobuf format."""

    schema_definition: Optional[str] = Field(default=UNSET, alias="schemaDefinition")
    """Optional. The entire schema definition is stored in this field."""


class GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2Dict(TypedDict):
    schema_definition: NotRequired[str]
