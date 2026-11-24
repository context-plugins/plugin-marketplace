from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class SchemaObject(SdkBaseModel):
    """Schema.org JSON-LD for a result."""

    context: Literal["https://schema.org"] = Field(default="https://schema.org", alias="@context")
    type_: TypeOrStr = Field(alias="@type")
    name: str
    url: str
    description: Optional[str] = UNSET


class SchemaObjectDict(TypedDict):
    context: Literal["https://schema.org"]
    type_: TypeOrStr
    name: str
    url: str
    description: NotRequired[str]
