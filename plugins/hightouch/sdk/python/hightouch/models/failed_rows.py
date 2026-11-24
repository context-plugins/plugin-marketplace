from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FailedRows(SdkBaseModel):
    """The number of rows that we attempted to sync, but were rejected by the destination.

    This does not include rows that weren't attempted due to the sync being cancelled."""

    removed_count: float = Field(alias="removedCount")
    """The number of failed removes."""

    changed_count: float = Field(alias="changedCount")
    """The number of failed changes."""

    added_count: float = Field(alias="addedCount")
    """The number of failed adds."""


class FailedRowsDict(TypedDict):
    removed_count: float
    changed_count: float
    added_count: float
