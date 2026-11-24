from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recommendation_related_event_resource import (
    RecommendationRelatedEventResource,
    RecommendationRelatedEventResourceDict,
)


class RecommendationRelatedEvent(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the event. This corresponds to the Name field in an Event object."""

    resources: Optional[list[RecommendationRelatedEventResource]] = Field(default=UNSET, alias="Resources")
    """A ResourceCollection object that contains arrays of the names of Amazon Web Services CloudFormation stacks. You
    can specify up to 500 Amazon Web Services CloudFormation stacks."""


class RecommendationRelatedEventDict(TypedDict):
    name: NotRequired[str]
    resources: NotRequired[list[RecommendationRelatedEventResourceDict]]
