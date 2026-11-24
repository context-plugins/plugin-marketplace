from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RequestCancelActivityTaskDecisionAttributes(SdkBaseModel):
    activity_id: str = Field(alias="activityId")
    """The activityId of the activity task to be canceled."""


class RequestCancelActivityTaskDecisionAttributesDict(TypedDict):
    activity_id: str
