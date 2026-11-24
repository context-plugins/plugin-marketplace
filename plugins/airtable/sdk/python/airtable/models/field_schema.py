from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr


class FieldSchema(SdkBaseModel):
    """The schema definition of a field within a table."""

    id: str
    """The unique identifier of the field (starts with 'fld')."""

    name: str
    """The name of the field."""

    type_: TypeOrStr = Field(alias="type")
    """The type of the field."""

    description: Optional[str] = UNSET
    """The description of the field."""

    options: Optional[Any] = UNSET
    """Configuration options for the field. The structure depends on the field type."""


class FieldSchemaDict(TypedDict):
    id: str
    name: str
    type_: TypeOrStr
    description: NotRequired[str]
    options: NotRequired[Any]
