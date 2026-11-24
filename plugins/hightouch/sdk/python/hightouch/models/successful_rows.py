from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SuccessfulRows(SdkBaseModel):
    """The number of rows that were successfully processed by the destination."""

    removed_count: float = Field(alias="removedCount")
    """The number of successful removes."""

    changed_count: float = Field(alias="changedCount")
    """The number of successful changes."""

    added_count: float = Field(alias="addedCount")
    """The number of successful adds."""


class SuccessfulRowsDict(TypedDict):
    removed_count: float
    changed_count: float
    added_count: float
