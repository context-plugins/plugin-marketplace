from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The action that the bot should execute."""

    ELICIT_INTENT = "ElicitIntent"
    START_INTENT = "StartIntent"
    ELICIT_SLOT = "ElicitSlot"
    EVALUATE_CONDITIONAL = "EvaluateConditional"
    INVOKE_DIALOG_CODE_HOOK = "InvokeDialogCodeHook"
    CONFIRM_INTENT = "ConfirmIntent"
    FULFILL_INTENT = "FulfillIntent"
    CLOSE_INTENT = "CloseIntent"
    END_CONVERSATION = "EndConversation"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
