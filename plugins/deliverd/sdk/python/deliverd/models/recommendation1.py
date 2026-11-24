from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.verdict1 import Verdict1OrStr


class Recommendation1(SdkBaseModel):
    verdict: Verdict1OrStr
    summary: str | None
    confidence: float | None
    rationale: str | None
    source: str | None


class Recommendation1Dict(TypedDict):
    verdict: Verdict1OrStr
    summary: str | None
    confidence: float | None
    rationale: str | None
    source: str | None
