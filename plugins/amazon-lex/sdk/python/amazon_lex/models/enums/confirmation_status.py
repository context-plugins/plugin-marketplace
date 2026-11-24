from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConfirmationStatus(str, Enum):
    """The status of the intent after the user responds to the confirmation prompt. If the user confirms the intent,
    Amazon Lex sets this field to Confirmed. If the user denies the intent, Amazon Lex sets this value to Denied. The
    possible values are: Confirmed - The user has responded "Yes" to the confirmation prompt, confirming that the intent
    is complete and that it is ready to be fulfilled. Denied - The user has responded "No" to the confirmation prompt.
    None - The user has never been prompted for confirmation; or, the user was prompted but did not confirm or deny the
    prompt."""

    NONE = "None"
    CONFIRMED = "Confirmed"
    DENIED = "Denied"

    __str__ = str.__str__


ConfirmationStatusOrStr: TypeAlias = Annotated[ConfirmationStatus | str, open_enum_validator(ConfirmationStatus)]
