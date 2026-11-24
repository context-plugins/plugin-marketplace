from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Capability(str, Enum):
    VIEW = "view"
    COMMENT = "comment"

    __str__ = str.__str__


CapabilityOrStr: TypeAlias = Annotated[Capability | str, open_enum_validator(Capability)]
