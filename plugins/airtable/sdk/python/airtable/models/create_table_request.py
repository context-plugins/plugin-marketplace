from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_field_request import CreateFieldRequest, CreateFieldRequestDict


class CreateTableRequest(SdkBaseModel):
    """Request body for creating a new table within a base."""

    name: str
    """The name of the new table."""

    description: Optional[str] = UNSET
    """The description of the new table."""

    fields: list[CreateFieldRequest]
    """The field definitions for the table. At least one field is required."""


class CreateTableRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    fields: list[CreateFieldRequestDict]
