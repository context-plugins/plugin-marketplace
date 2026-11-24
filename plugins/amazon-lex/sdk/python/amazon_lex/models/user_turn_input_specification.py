from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .input_session_state_specification import InputSessionStateSpecification, InputSessionStateSpecificationDict
from .utterance_input_specification import UtteranceInputSpecification, UtteranceInputSpecificationDict


class UserTurnInputSpecification(SdkBaseModel):
    utterance_input: UtteranceInputSpecification = Field(alias="utteranceInput")
    request_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="requestAttributes")
    """Request attributes of the user turn."""

    session_state: Optional[InputSessionStateSpecification] = Field(default=UNSET, alias="sessionState")


class UserTurnInputSpecificationDict(TypedDict):
    utterance_input: UtteranceInputSpecificationDict
    request_attributes: NotRequired[dict[str, str]]
    session_state: NotRequired[InputSessionStateSpecificationDict]
