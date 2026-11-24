from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .interpretation import Interpretation, InterpretationDict
from .runtime_v2_lex_message import RuntimeV2LexMessage, RuntimeV2LexMessageDict
from .session_state import SessionState, SessionStateDict


class GetSessionResponse(SdkBaseModel):
    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The identifier of the returned session."""

    messages: Optional[list[RuntimeV2LexMessage]] = UNSET
    """A list of messages that were last sent to the user. The messages are ordered based on the order that your
    returned the messages from your Lambda function or the order that messages are defined in the bot."""

    interpretations: Optional[list[Interpretation]] = UNSET
    """A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. Each interpretation includes
    the intent, a score that indicates how confident Amazon Lex V2 is that the interpretation is the correct one, and an
    optional sentiment response that indicates the sentiment expressed in the utterance."""

    session_state: Optional[SessionState] = Field(default=UNSET, alias="sessionState")


class GetSessionResponseDict(TypedDict):
    session_id: NotRequired[str]
    messages: NotRequired[list[RuntimeV2LexMessageDict]]
    interpretations: NotRequired[list[InterpretationDict]]
    session_state: NotRequired[SessionStateDict]
