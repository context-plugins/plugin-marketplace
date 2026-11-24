from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .interpretation import Interpretation, InterpretationDict
from .recognized_bot_member import RecognizedBotMember, RecognizedBotMemberDict
from .runtime_v2_lex_message import RuntimeV2LexMessage, RuntimeV2LexMessageDict
from .session_state import SessionState, SessionStateDict


class RecognizeTextResponse(SdkBaseModel):
    messages: Optional[list[RuntimeV2LexMessage]] = UNSET
    """A list of messages last sent to the user. The messages are ordered based on the order that you returned the
    messages from your Lambda function or the order that the messages are defined in the bot."""

    session_state: Optional[SessionState] = Field(default=UNSET, alias="sessionState")
    interpretations: Optional[list[Interpretation]] = UNSET
    """A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. Each interpretation includes
    the intent, a score that indicates now confident Amazon Lex V2 is that the interpretation is the correct one, and an
    optional sentiment response that indicates the sentiment expressed in the utterance."""

    request_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="requestAttributes")
    """The attributes sent in the request."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The identifier of the session in use."""

    recognized_bot_member: Optional[RecognizedBotMember] = Field(default=UNSET, alias="recognizedBotMember")


class RecognizeTextResponseDict(TypedDict):
    messages: NotRequired[list[RuntimeV2LexMessageDict]]
    session_state: NotRequired[SessionStateDict]
    interpretations: NotRequired[list[InterpretationDict]]
    request_attributes: NotRequired[dict[str, str]]
    session_id: NotRequired[str]
    recognized_bot_member: NotRequired[RecognizedBotMemberDict]
