from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class FindAllCandidateMetrics1(SdkBaseModel):
    """Candidate metrics for the FindAll run."""

    generated_candidates_count: int = 0
    """Number of candidates that were selected."""

    matched_candidates_count: int = 0
    """Number of candidates that evaluated to matched."""


class FindAllCandidateMetrics1Dict(TypedDict):
    generated_candidates_count: NotRequired[int]
    matched_candidates_count: NotRequired[int]
