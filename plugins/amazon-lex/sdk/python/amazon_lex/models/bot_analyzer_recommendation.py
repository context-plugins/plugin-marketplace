from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.priority import PriorityOrStr
from .issue_location import IssueLocation, IssueLocationDict


class BotAnalyzerRecommendation(SdkBaseModel):
    issue_location: IssueLocation = Field(alias="issueLocation")
    priority: PriorityOrStr
    """The priority level of the recommendation. Valid Values: High | Medium | Low"""

    issue_description: str = Field(alias="issueDescription")
    """A detailed description of the identified configuration issue."""

    proposed_fix: str = Field(alias="proposedFix")
    """The recommended solution to address the identified issue."""


class BotAnalyzerRecommendationDict(TypedDict):
    issue_location: IssueLocationDict
    priority: PriorityOrStr
    issue_description: str
    proposed_fix: str
