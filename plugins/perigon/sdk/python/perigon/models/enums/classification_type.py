from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClassificationType(str, Enum):
    """How matching content is classified: EVENT, MENTIONS, or TOPIC."""

    EVENT = "EVENT"
    MENTIONS = "MENTIONS"
    TOPIC = "TOPIC"

    __str__ = str.__str__


ClassificationTypeOrStr: TypeAlias = Annotated[ClassificationType | str, open_enum_validator(ClassificationType)]
