from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlannedRows(SdkBaseModel):
    """The number of planned rows that this sync run was supposed to execute.

    Note that the counts for ``successfulRows`` and ``failedRows`` may not add up to ``plannedRows`` if the sync was
    cancelled."""

    removed_count: float = Field(alias="removedCount")
    """The number of removed rows."""

    changed_count: float = Field(alias="changedCount")
    """The number of changed rows."""

    added_count: float = Field(alias="addedCount")
    """The number of added rows."""


class PlannedRowsDict(TypedDict):
    removed_count: float
    changed_count: float
    added_count: float
