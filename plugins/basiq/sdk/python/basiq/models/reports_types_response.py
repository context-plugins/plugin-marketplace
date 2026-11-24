from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data14 import Data14, Data14Dict


class ReportsTypesResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    """Report ID."""

    name: Optional[str] = UNSET
    """Name of the report."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Always "list"."""

    description: Optional[str] = UNSET
    """In depth consumer affordability assessment."""

    count: Optional[int] = UNSET
    """Total count of report."""

    filters: Optional[list[Any]] = UNSET
    """filters for reports."""

    data: Optional[list[Data14]] = UNSET


class ReportsTypesResponseDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[str]
    description: NotRequired[str]
    count: NotRequired[int]
    filters: NotRequired[list[Any]]
    data: NotRequired[list[Data14Dict]]
