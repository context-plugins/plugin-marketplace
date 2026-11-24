from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .field_model import FieldModel, FieldModelDict


class GlobalField(SdkBaseModel):
    """A reusable global field definition that can be embedded in content types."""

    uid: Optional[str] = UNSET
    """Unique identifier of the global field."""

    title: Optional[str] = UNSET
    """Display name of the global field."""

    schema_value: Optional[list[FieldModel]] = Field(default=UNSET, alias="schema")
    """Array of field definitions within the global field group."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the global field was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the global field was last updated."""


class GlobalFieldDict(TypedDict):
    uid: NotRequired[str]
    title: NotRequired[str]
    schema_value: NotRequired[list[FieldModelDict]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
