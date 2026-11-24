from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateFieldRequest(SdkBaseModel):
    """Request body for creating a new field."""

    name: str
    """The name of the field."""

    type_: str = Field(alias="type")
    """The type of the field. Some types like formula and autoNumber cannot be created via the API."""

    description: Optional[str] = UNSET
    """A description of the field."""

    options: Optional[Any] = UNSET
    """Configuration options for the field. Required for some field types like singleSelect and multipleSelects."""


class CreateFieldRequestDict(TypedDict):
    name: str
    type_: str
    description: NotRequired[str]
    options: NotRequired[Any]
