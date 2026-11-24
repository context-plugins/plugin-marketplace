from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.verdict import VerdictOrStr


class Recommendation(SdkBaseModel):
    """What your model or decision engine recommends. Shown to the approver as context, never as the decision. Where the
    organisation has blind review on, a high or critical risk request's recommendation is shown only after the approver
    records their own view"""

    verdict: VerdictOrStr
    """approve or reject"""

    summary: Optional[str] = UNSET
    """The recommendation in a line"""

    confidence: Optional[float] = UNSET
    """How sure it is, from 0 to 1"""

    rationale: Optional[str] = UNSET
    """Why, as the system explains it"""

    source: Optional[str] = UNSET
    """Which model or engine made it"""


class RecommendationDict(TypedDict):
    verdict: VerdictOrStr
    summary: NotRequired[str]
    confidence: NotRequired[float]
    rationale: NotRequired[str]
    source: NotRequired[str]
