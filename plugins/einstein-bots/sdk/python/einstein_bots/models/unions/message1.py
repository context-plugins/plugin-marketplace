from __future__ import annotations

from typing import TypeAlias

from ..choice_message import ChoiceMessage, ChoiceMessageDict
from ..redirect_message import RedirectMessage, RedirectMessageDict
from ..set_variables_message import SetVariablesMessage, SetVariablesMessageDict
from ..text_message import TextMessage, TextMessageDict
from ..transfer_failed_request_message import TransferFailedRequestMessage, TransferFailedRequestMessageDict
from ..transfer_succeeded_request_message import TransferSucceededRequestMessage, TransferSucceededRequestMessageDict

Message1: TypeAlias = (
    ChoiceMessage
    | TextMessage
    | TransferSucceededRequestMessage
    | TransferFailedRequestMessage
    | RedirectMessage
    | SetVariablesMessage
)
"""Message to the bot."""

Message1Dict: TypeAlias = (
    ChoiceMessageDict
    | TextMessageDict
    | TransferSucceededRequestMessageDict
    | TransferFailedRequestMessageDict
    | RedirectMessageDict
    | SetVariablesMessageDict
)
