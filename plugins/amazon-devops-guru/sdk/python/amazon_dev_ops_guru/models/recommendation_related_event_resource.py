from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecommendationRelatedEventResource(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the resource that emitted the event. This corresponds to the Name field in an EventResource
    object."""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type of the resource that emitted the event. This corresponds to the Type field in an EventResource
    object."""


class RecommendationRelatedEventResourceDict(TypedDict):
    name: NotRequired[str]
    type_: NotRequired[str]
