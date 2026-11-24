from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .candidate import Candidate, CandidateDict


class Ambiguou(SdkBaseModel):
    phrase: str
    candidates: list[Candidate]


class AmbiguouDict(TypedDict):
    phrase: str
    candidates: list[CandidateDict]
