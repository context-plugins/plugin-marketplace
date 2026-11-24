from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1JsonschemavalidatorRequest(SdkBaseModel):
    schema_value: str = Field(alias="schema")
    """The JSON Schema to validate against"""

    json_value: str = Field(alias="json")
    """The JSON data to validate. An empty object is a valid document and is accepted."""


class V1JsonschemavalidatorRequestDict(TypedDict):
    schema_value: str
    json_value: str
