from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_status_failure import BulkStatusFailure, BulkStatusFailureDict


class BulkStatusResponse(SdkBaseModel):
    """Non-atomic: partial successes commit.

    Per-input failures are surfaced individually instead of failing the whole batch. ``unchanged`` carries no-ops
    (target progress equals existing progress)."""

    succeeded: Optional[list[UUID]] = UNSET
    unchanged: Optional[list[UUID]] = UNSET
    failures: Optional[list[BulkStatusFailure]] = UNSET


class BulkStatusResponseDict(TypedDict):
    succeeded: NotRequired[list[UUID]]
    unchanged: NotRequired[list[UUID]]
    failures: NotRequired[list[BulkStatusFailureDict]]
