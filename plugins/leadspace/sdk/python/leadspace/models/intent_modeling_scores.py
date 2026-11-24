from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IntentModelingScores(SdkBaseModel):
    project_name: Optional[str] = UNSET
    project_score: Optional[str] = UNSET
    """By default 0-1 No Intent, 1-75 Low, 75-95 Medium, 95-100 High"""

    surging_topics: Optional[list[str]] = UNSET


class IntentModelingScoresDict(TypedDict):
    project_name: NotRequired[str]
    project_score: NotRequired[str]
    surging_topics: NotRequired[list[str]]
