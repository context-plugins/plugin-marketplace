from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2(str, Enum):
    """The next action that the bot should take in its interaction with the user. The possible values are: ConfirmIntent
    - The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question
    such as "Place the order?" Close - Indicates that the there will not be a response from the user. For example, the
    statement "Your order has been placed" does not require a response. Delegate - The next action is determined by
    Amazon Lex. ElicitIntent - The next action is to determine the intent that the user wants to fulfill. ElicitSlot -
    The next action is to elicit"""

    ELICIT_INTENT = "ElicitIntent"
    CONFIRM_INTENT = "ConfirmIntent"
    ELICIT_SLOT = "ElicitSlot"
    CLOSE = "Close"
    DELEGATE = "Delegate"

    __str__ = str.__str__


Type2OrStr: TypeAlias = Annotated[Type2 | str, open_enum_validator(Type2)]
