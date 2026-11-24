from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recommendation_related_anomaly import RecommendationRelatedAnomaly, RecommendationRelatedAnomalyDict
from .recommendation_related_event import RecommendationRelatedEvent, RecommendationRelatedEventDict


class Recommendation(SdkBaseModel):
    description: Optional[str] = Field(default=UNSET, alias="Description")
    """A description of the problem."""

    link: Optional[str] = Field(default=UNSET, alias="Link")
    """A hyperlink to information to help you address the problem."""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the recommendation."""

    reason: Optional[str] = Field(default=UNSET, alias="Reason")
    """The reason DevOps Guru flagged the anomalous behavior as a problem."""

    related_events: Optional[list[RecommendationRelatedEvent]] = Field(default=UNSET, alias="RelatedEvents")
    """Events that are related to the problem. Use these events to learn more about what's happening and to help address
    the issue."""

    related_anomalies: Optional[list[RecommendationRelatedAnomaly]] = Field(default=UNSET, alias="RelatedAnomalies")
    """Anomalies that are related to the problem. Use these Anomalies to learn more about what's happening and to help
    address the issue."""

    category: Optional[str] = Field(default=UNSET, alias="Category")
    """The category type of the recommendation."""


class RecommendationDict(TypedDict):
    description: NotRequired[str]
    link: NotRequired[str]
    name: NotRequired[str]
    reason: NotRequired[str]
    related_events: NotRequired[list[RecommendationRelatedEventDict]]
    related_anomalies: NotRequired[list[RecommendationRelatedAnomalyDict]]
    category: NotRequired[str]
