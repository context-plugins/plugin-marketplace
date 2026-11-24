from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClassificationType2(str, Enum):
    """How matching content is classified. Accepts EVENT, MENTIONS, or TOPIC."""

    EVENT = "EVENT"
    MENTIONS = "MENTIONS"
    TOPIC = "TOPIC"

    __str__ = str.__str__


ClassificationType2OrStr: TypeAlias = Annotated[ClassificationType2 | str, open_enum_validator(ClassificationType2)]
