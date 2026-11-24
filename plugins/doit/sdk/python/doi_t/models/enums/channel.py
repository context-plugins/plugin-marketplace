from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Channel(str, Enum):
    """Dispatch channel."""

    EMAIL = "email"
    SLACK = "slack"
    MSTEAMS = "msteams"

    __str__ = str.__str__


ChannelOrStr: TypeAlias = Annotated[Channel | str, open_enum_validator(Channel)]
