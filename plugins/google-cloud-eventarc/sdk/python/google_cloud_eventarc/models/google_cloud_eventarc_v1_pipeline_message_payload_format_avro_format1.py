from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1(SdkBaseModel):
    """Optional. Avro format."""

    schema_definition: Optional[str] = Field(default=UNSET, alias="schemaDefinition")
    """Optional. The entire schema definition is stored in this field."""


class GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1Dict(TypedDict):
    schema_definition: NotRequired[str]
