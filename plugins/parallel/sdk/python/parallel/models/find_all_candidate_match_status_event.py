from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.type2 import Type2OrStr
from .find_all_candidate2 import FindAllCandidate2, FindAllCandidate2Dict


class FindAllCandidateMatchStatusEvent(SdkBaseModel):
    """Event containing a candidate whose match status has changed."""

    type_: Type2OrStr = Field(alias="type")
    """Event type; one of findall.candidate.generated, findall.candidate.matched, findall.candidate.unmatched,
    findall.candidate.discarded, findall.candidate.enriched."""

    timestamp: RFC3339DateTime
    """Timestamp of the event."""

    event_id: str
    """Unique event identifier for the event."""

    data: FindAllCandidate2
    """The candidate whose match status has been updated."""


class FindAllCandidateMatchStatusEventDict(TypedDict):
    type_: Type2OrStr
    timestamp: RFC3339DateTime
    event_id: str
    data: FindAllCandidate2Dict
