from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConfirmationState(str, Enum):
    """Indicates whether the intent has been Confirmed, Denied, or None if the confirmation stage has not yet been
    reached."""

    CONFIRMED = "Confirmed"
    DENIED = "Denied"
    NONE = "None"

    __str__ = str.__str__


ConfirmationStateOrStr: TypeAlias = Annotated[ConfirmationState | str, open_enum_validator(ConfirmationState)]
