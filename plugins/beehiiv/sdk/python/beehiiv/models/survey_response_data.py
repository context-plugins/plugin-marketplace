from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subscription_data import SubscriptionData, SubscriptionDataDict
from .survey_response_answer import SurveyResponseAnswer, SurveyResponseAnswerDict


class SurveyResponseData(SdkBaseModel):
    answers: Optional[list[SurveyResponseAnswer]] = UNSET
    """An array of answers from the survey response."""

    created: Optional[int] = UNSET
    """The time the survey response was created. Measured in seconds since the Unix epoch."""

    id: Optional[str] = UNSET
    """The response ID. This is unique to the individual submission."""

    survey_id: Optional[str] = UNSET
    """The ID of the survey that the response was submitted to."""

    subscription: Optional[SubscriptionData] = UNSET
    updated: Optional[int] = UNSET
    """The date the survey response was updated. Measured in seconds since the Unix epoch."""


class SurveyResponseDataDict(TypedDict):
    answers: NotRequired[list[SurveyResponseAnswerDict]]
    created: NotRequired[int]
    id: NotRequired[str]
    survey_id: NotRequired[str]
    subscription: NotRequired[SubscriptionDataDict]
    updated: NotRequired[int]
