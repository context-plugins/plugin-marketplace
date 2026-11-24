from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VariableValidationEntity(SdkBaseModel):
    schema_type: Any = Field(alias="schemaType")
    enum_values: Optional[Any] = Field(default=UNSET, alias="enumValues")
    regex_pattern: Optional[str] = Field(default=UNSET, alias="regexPattern")
    json_schema: Optional[str] = Field(default=UNSET, alias="jsonSchema")
    description: str
    example_value: Any = Field(alias="exampleValue")


class VariableValidationEntityDict(TypedDict):
    schema_type: Any
    enum_values: NotRequired[Any]
    regex_pattern: NotRequired[str]
    json_schema: NotRequired[str]
    description: str
    example_value: Any
