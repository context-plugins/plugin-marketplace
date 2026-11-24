from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .field_model import FieldModel, FieldModelDict


class ContentType(SdkBaseModel):
    """A content type definition including schema and metadata."""

    uid: Optional[str] = UNSET
    """Unique identifier of the content type."""

    title: Optional[str] = UNSET
    """Display name of the content type."""

    schema_value: Optional[list[FieldModel]] = Field(default=UNSET, alias="schema")
    """Array of field definitions for the content type."""

    options: Optional[Any] = UNSET
    """Configuration options for the content type such as versioning and workflow settings."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the content type was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the content type was last updated."""


class ContentTypeDict(TypedDict):
    uid: NotRequired[str]
    title: NotRequired[str]
    schema_value: NotRequired[list[FieldModelDict]]
    options: NotRequired[Any]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
