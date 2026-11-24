from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Candidate(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    provider: Optional[str] = UNSET


class CandidateDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    provider: NotRequired[str]
