from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DialogState1(str, Enum):
    """ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response to confirm the intent before fulfilling an
    intent. ElicitIntent - Amazon Lex wants to elicit the user's intent. ElicitSlot - Amazon Lex is expecting the value
    of a slot for the current intent. Failed - Conveys that the conversation with the user has failed. This can happen
    for various reasons, including the user does not provide an appropriate response to prompts from the service, or if
    the Lambda function fails to fulfill the intent. Fulfilled - Conveys that the Lambda function has sucessfully
    fulfilled the intent. ReadyForFulfi"""

    ELICIT_INTENT = "ElicitIntent"
    CONFIRM_INTENT = "ConfirmIntent"
    ELICIT_SLOT = "ElicitSlot"
    FULFILLED = "Fulfilled"
    READY_FOR_FULFILLMENT = "ReadyForFulfillment"
    FAILED = "Failed"

    __str__ = str.__str__


DialogState1OrStr: TypeAlias = Annotated[DialogState1 | str, open_enum_validator(DialogState1)]
