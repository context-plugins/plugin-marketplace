from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ParticipantRole1(str, Enum):
    """Specify the participant that you want to flag. Omitting this parameter is equivalent to specifying both
    participants."""

    AGENT = "AGENT"
    CUSTOMER = "CUSTOMER"

    __str__ = str.__str__


ParticipantRole1OrStr: TypeAlias = Annotated[ParticipantRole1 | str, open_enum_validator(ParticipantRole1)]
