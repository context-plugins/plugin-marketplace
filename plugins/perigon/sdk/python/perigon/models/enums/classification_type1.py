from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClassificationType1(str, Enum):
    """New classification behavior. Accepts EVENT, MENTIONS, or TOPIC."""

    EVENT = "EVENT"
    MENTIONS = "MENTIONS"
    TOPIC = "TOPIC"

    __str__ = str.__str__


ClassificationType1OrStr: TypeAlias = Annotated[ClassificationType1 | str, open_enum_validator(ClassificationType1)]
