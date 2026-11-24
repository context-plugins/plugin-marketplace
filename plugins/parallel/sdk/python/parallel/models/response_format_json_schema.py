from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .json_schema import JsonSchema, JsonSchemaDict


class ResponseFormatJsonSchema(SdkBaseModel):
    """JSON Schema response format.

    Used to generate structured JSON responses. Learn more about `Structured Outputs
    <https://platform.openai.com/docs/guides/structured-outputs>`__."""

    json_schema: JsonSchema
    """Structured Outputs configuration options, including a JSON Schema."""

    type_: Literal["json_schema"] = Field(default="json_schema", alias="type")


class ResponseFormatJsonSchemaDict(TypedDict):
    json_schema: JsonSchemaDict
    type_: Literal["json_schema"]
