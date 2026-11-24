from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .field2 import Field2, Field2Dict


class ContentType2(SdkBaseModel):
    """A content type definition with schema and configuration."""

    uid: Optional[str] = UNSET
    """Unique identifier of the content type."""

    title: Optional[str] = UNSET
    """Display name of the content type."""

    description: Optional[str] = UNSET
    """Description of the content type's purpose."""

    schema_value: Optional[list[Field2]] = Field(default=UNSET, alias="schema")
    """Array of field definitions."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the content type was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the content type was last updated."""


class ContentType2Dict(TypedDict):
    uid: NotRequired[str]
    title: NotRequired[str]
    description: NotRequired[str]
    schema_value: NotRequired[list[Field2Dict]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
