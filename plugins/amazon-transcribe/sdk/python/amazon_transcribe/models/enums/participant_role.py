from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ParticipantRole(str, Enum):
    """Specify the interrupter that you want to flag. Omitting this parameter is equivalent to specifying both
    participants."""

    AGENT = "AGENT"
    CUSTOMER = "CUSTOMER"

    __str__ = str.__str__


ParticipantRoleOrStr: TypeAlias = Annotated[ParticipantRole | str, open_enum_validator(ParticipantRole)]
