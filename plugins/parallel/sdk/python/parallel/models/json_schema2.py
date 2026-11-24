from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.type_parallel_ai_find_all_api import TypeParallelAiFindAllApi, TypeParallelAiFindAllApiOrStr


class JsonSchema2(SdkBaseModel):
    """JSON schema for the enrichment output schema for the FindAll run."""

    json_schema: Any
    """A JSON Schema object. Only a subset of JSON Schema is supported."""

    type_: TypeParallelAiFindAllApiOrStr = Field(default=TypeParallelAiFindAllApi.JSON, alias="type")
    """The type of schema being defined. Always ``json``."""


class JsonSchema2Dict(TypedDict):
    json_schema: Any
    type_: NotRequired[TypeParallelAiFindAllApiOrStr]
