from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Sync(SdkBaseModel):
    """Sync health: tells "no new reviews" apart from "the check failed". After 3 failed checks in a row Prisma sends
    ``location.sync_failed``, and ``location.sync_recovered`` on the next successful one."""

    consecutive_failures: int
    """Checks in a row that failed. ``0`` after a successful check."""

    last_error: str | None
    """The last failed check's error (up to 300 characters, never keys or tokens). Kept after a recovery, as history."""

    last_error_at: RFC3339DateTime | None
    """When the last check failed."""


class SyncDict(TypedDict):
    consecutive_failures: int
    last_error: str | None
    last_error_at: RFC3339DateTime | None
