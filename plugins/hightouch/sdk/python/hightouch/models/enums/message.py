from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Message(str, Enum):
    VALIDATION_FAILED = "Validation failed"

    __str__ = str.__str__


MessageOrStr: TypeAlias = Annotated[Message | str, open_enum_validator(Message)]
