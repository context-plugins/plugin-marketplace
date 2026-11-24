from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JsonSchema(SdkBaseModel):
    """Structured Outputs configuration options, including a JSON Schema."""

    name: str
    description: Optional[str] = UNSET
    schema_value: Optional[Any] = Field(default=UNSET, alias="schema")
    strict: Optional[bool] = UNSET


class JsonSchemaDict(TypedDict):
    name: str
    description: NotRequired[str]
    schema_value: NotRequired[Any]
    strict: NotRequired[bool]
