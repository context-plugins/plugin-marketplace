from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Role1(str, Enum):
    """The role of the chat message."""

    SYSTEM = "system"
    USER = "user"
    ASSISTANT = "assistant"

    __str__ = str.__str__


Role1OrStr: TypeAlias = Annotated[Role1 | str, open_enum_validator(Role1)]
