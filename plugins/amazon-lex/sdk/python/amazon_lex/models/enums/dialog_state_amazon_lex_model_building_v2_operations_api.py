from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DialogStateAmazonLexModelBuildingV2OperationsApi(str, Enum):
    """Identifies the current state of the user interaction. Amazon Lex returns one of the following values as
    dialogState. The client can optionally use this information to customize the user interface. ElicitIntent - Amazon
    Lex wants to elicit the user's intent. Consider the following examples: For example, a user might utter an intent
    ("I want to order a pizza"). If Amazon Lex cannot infer the user intent from this utterance, it will return this
    dialog state. ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response. For example, Amazon Lex wants user
    confirmation before fulfilling an inten"""

    ELICIT_INTENT = "ElicitIntent"
    CONFIRM_INTENT = "ConfirmIntent"
    ELICIT_SLOT = "ElicitSlot"
    FULFILLED = "Fulfilled"
    READY_FOR_FULFILLMENT = "ReadyForFulfillment"
    FAILED = "Failed"

    __str__ = str.__str__


DialogStateAmazonLexModelBuildingV2OperationsApiOrStr: TypeAlias = Annotated[
    DialogStateAmazonLexModelBuildingV2OperationsApi | str,
    open_enum_validator(DialogStateAmazonLexModelBuildingV2OperationsApi),
]
