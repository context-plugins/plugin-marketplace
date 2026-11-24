from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_field_request import CreateFieldRequest, CreateFieldRequestDict


class Table(SdkBaseModel):
    name: str
    """The name of the table."""

    description: Optional[str] = UNSET
    """The description of the table."""

    fields: list[CreateFieldRequest]
    """The field definitions for the table."""


class TableDict(TypedDict):
    name: str
    description: NotRequired[str]
    fields: list[CreateFieldRequestDict]
