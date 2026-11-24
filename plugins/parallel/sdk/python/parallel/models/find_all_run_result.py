from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .find_all_candidate import FindAllCandidate, FindAllCandidateDict
from .find_all_run1 import FindAllRun1, FindAllRun1Dict


class FindAllRunResult(SdkBaseModel):
    """Complete FindAll search results.

    Represents a snapshot of a FindAll run, including run metadata and a list of candidate entities with their match
    status and details at the time the snapshot was taken."""

    run: FindAllRun1
    """FindAll run object."""

    candidates: list[FindAllCandidate]
    """All evaluated candidates at the time of the snapshot."""

    last_event_id: Optional[str] = UNSET
    """ID of the last event of the run at the time of the request. This can be used to resume streaming from the last
    event."""


class FindAllRunResultDict(TypedDict):
    run: FindAllRun1Dict
    candidates: list[FindAllCandidateDict]
    last_event_id: NotRequired[str]
