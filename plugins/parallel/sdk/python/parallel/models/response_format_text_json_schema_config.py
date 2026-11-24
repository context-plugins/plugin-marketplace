from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResponseFormatTextJsonSchemaConfig(SdkBaseModel):
    """JSON Schema output format: the response's output text conforms to ``schema``."""

    name: str
    schema_value: Any = Field(alias="schema")
    type_: Literal["json_schema"] = Field(default="json_schema", alias="type")
    description: Optional[str] = UNSET
    strict: Optional[bool] = UNSET


class ResponseFormatTextJsonSchemaConfigDict(TypedDict):
    name: str
    schema_value: Any
    type_: Literal["json_schema"]
    description: NotRequired[str]
    strict: NotRequired[bool]
