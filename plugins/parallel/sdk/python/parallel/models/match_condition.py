from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MatchCondition(SdkBaseModel):
    """Match condition model for FindAll ingest."""

    name: str
    """Name of the match condition."""

    description: str
    """Detailed description of the match condition. Include as much specific information as possible to help improve the
    quality and accuracy of Find All run results."""


class MatchConditionDict(TypedDict):
    name: str
    description: str
