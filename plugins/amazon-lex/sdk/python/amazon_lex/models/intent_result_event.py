from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.input_mode import InputModeOrStr
from .interpretation import Interpretation, InterpretationDict
from .recognized_bot_member import RecognizedBotMember, RecognizedBotMemberDict
from .session_state import SessionState, SessionStateDict


class IntentResultEvent(SdkBaseModel):
    input_mode: Optional[InputModeOrStr] = Field(default=UNSET, alias="inputMode")
    """Indicates whether the input to the operation was text, speech, or from a touch-tone keypad."""

    interpretations: Optional[list[Interpretation]] = UNSET
    """A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. Each interpretation includes
    the intent, a score that indicates how confident Amazon Lex V2 is that the interpretation is the correct one, and an
    optional sentiment response that indicates the sentiment expressed in the utterance."""

    session_state: Optional[SessionState] = Field(default=UNSET, alias="sessionState")
    request_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="requestAttributes")
    """The attributes sent in the request."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The identifier of the session in use."""

    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    """A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form RESPONSE-N, where N is a
    number starting with one and incremented for each event sent by Amazon Lex V2 in the current session."""

    recognized_bot_member: Optional[RecognizedBotMember] = Field(default=UNSET, alias="recognizedBotMember")


class IntentResultEventDict(TypedDict):
    input_mode: NotRequired[InputModeOrStr]
    interpretations: NotRequired[list[InterpretationDict]]
    session_state: NotRequired[SessionStateDict]
    request_attributes: NotRequired[dict[str, str]]
    session_id: NotRequired[str]
    event_id: NotRequired[str]
    recognized_bot_member: NotRequired[RecognizedBotMemberDict]
