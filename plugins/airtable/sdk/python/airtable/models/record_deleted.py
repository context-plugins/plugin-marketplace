from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecordDeleted(SdkBaseModel):
    """Confirmation that a record was deleted."""

    id: str
    """The ID of the deleted record."""

    deleted: bool
    """Always true when the deletion succeeds."""


class RecordDeletedDict(TypedDict):
    id: str
    deleted: bool
