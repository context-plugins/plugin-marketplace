from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetIntrospectionSchemaResponse(SdkBaseModel):
    schema_value: Optional[str] = Field(default=UNSET, alias="schema")
    """The schema, in GraphQL Schema Definition Language (SDL) format. For more information, see the GraphQL SDL
    documentation."""


class GetIntrospectionSchemaResponseDict(TypedDict):
    schema_value: NotRequired[str]
