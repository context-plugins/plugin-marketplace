from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """The next action that the bot should take in its interaction with the user. The following values are possible:
    Close – Indicates that there will not be a response from the user. For example, the statement "Your order has been
    placed" does not require a response. ConfirmIntent – The next action is asking the user if the intent is complete
    and ready to be fulfilled. This is a yes/no question such as "Place the order?" Delegate – The next action is
    determined by Amazon Lex V2. ElicitIntent – The next action is to elicit an intent from the user. ElicitSlot – The
    next action is to elicit a slot valu"""

    CLOSE = "Close"
    CONFIRM_INTENT = "ConfirmIntent"
    DELEGATE = "Delegate"
    ELICIT_INTENT = "ElicitIntent"
    ELICIT_SLOT = "ElicitSlot"
    NONE = "None"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
