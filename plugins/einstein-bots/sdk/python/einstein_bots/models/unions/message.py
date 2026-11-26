from __future__ import annotations

from typing import TypeAlias

from ..choices_response_message import ChoicesResponseMessage, ChoicesResponseMessageDict
from ..escalate_response_message import EscalateResponseMessage, EscalateResponseMessageDict
from ..session_ended_response_message import SessionEndedResponseMessage, SessionEndedResponseMessageDict
from ..text_response_message import TextResponseMessage, TextResponseMessageDict

Message: TypeAlias = (
    TextResponseMessage | ChoicesResponseMessage | EscalateResponseMessage | SessionEndedResponseMessage
)

MessageDict: TypeAlias = (
    TextResponseMessageDict | ChoicesResponseMessageDict | EscalateResponseMessageDict | SessionEndedResponseMessageDict
)
