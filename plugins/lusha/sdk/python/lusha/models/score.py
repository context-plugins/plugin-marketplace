from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Score(SdkBaseModel):
    """Refinement-only — must be paired with a base filter. Raw 0–100 contact score. Distinct from the ``confidence``
    band ("A+"/"A") returned on enriched contacts, which is derived from this score (e.g. ``A+`` when score > 75)."""

    min_score: Optional[int] = Field(default=UNSET, alias="minScore")
    max_score: Optional[int] = Field(default=UNSET, alias="maxScore")


class ScoreDict(TypedDict):
    min_score: NotRequired[int]
    max_score: NotRequired[int]
