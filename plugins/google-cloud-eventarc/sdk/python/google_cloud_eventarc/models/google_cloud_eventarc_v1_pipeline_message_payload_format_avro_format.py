from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat(SdkBaseModel):
    """The format of an AVRO message payload."""

    schema_definition: Optional[str] = Field(default=UNSET, alias="schemaDefinition")
    """Optional. The entire schema definition is stored in this field."""


class GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormatDict(TypedDict):
    schema_definition: NotRequired[str]
