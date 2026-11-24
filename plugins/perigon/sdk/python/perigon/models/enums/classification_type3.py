from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClassificationType3(str, Enum):
    EVENT = "EVENT"
    MENTIONS = "MENTIONS"
    TOPIC = "TOPIC"

    __str__ = str.__str__


ClassificationType3OrStr: TypeAlias = Annotated[ClassificationType3 | str, open_enum_validator(ClassificationType3)]
