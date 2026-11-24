from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.match_status import MatchStatusOrStr
from .field_basis import FieldBasis, FieldBasisDict


class FindAllCandidate(SdkBaseModel):
    """Candidate for a find all run that may end up as a match.

    Contains all the candidate's metadata and the output of the match conditions. A candidate is a match if all match
    conditions are satisfied."""

    candidate_id: str
    """ID of the candidate."""

    name: str
    """Name of the candidate."""

    url: str
    """URL that provides context or details of the entity for disambiguation."""

    description: Optional[str] = UNSET
    """Brief description of the entity that can help answer whether entity satisfies the query."""

    match_status: MatchStatusOrStr
    """Status of the candidate. One of generated, matched, unmatched, discarded."""

    output: Optional[Any] = UNSET
    """Results of the match condition evaluations for this candidate. This object contains the structured output that
    determines whether the candidate matches the overall FindAll objective."""

    basis: Optional[list[FieldBasis]] = UNSET
    """List of FieldBasis objects supporting the output."""


class FindAllCandidateDict(TypedDict):
    candidate_id: str
    name: str
    url: str
    description: NotRequired[str]
    match_status: MatchStatusOrStr
    output: NotRequired[Any]
    basis: NotRequired[list[FieldBasisDict]]
