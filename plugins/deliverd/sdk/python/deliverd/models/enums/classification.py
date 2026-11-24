from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Classification(str, Enum):
    """How sensitive the data is. Can raise, never lower, what Deliverd already knows about a report it holds"""

    PUBLIC = "public"
    INTERNAL = "internal"
    CONFIDENTIAL = "confidential"
    RESTRICTED = "restricted"

    __str__ = str.__str__


ClassificationOrStr: TypeAlias = Annotated[Classification | str, open_enum_validator(Classification)]
