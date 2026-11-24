from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .field2 import Field2, Field2Dict


class ContentType1(SdkBaseModel):
    uid: str
    """Unique identifier for the content type."""

    title: str
    """Display name of the content type."""

    schema_value: list[Field2] = Field(alias="schema")
    """Array of field definitions."""

    options: Optional[Any] = UNSET
    """Configuration options for the content type."""


class ContentType1Dict(TypedDict):
    uid: str
    title: str
    schema_value: list[Field2Dict]
    options: NotRequired[Any]
