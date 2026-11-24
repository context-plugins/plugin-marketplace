from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category(str, Enum):
    """The category of message you are sending."""

    PROMOTIONAL = "promotional"
    TRANSACTIONAL = "transactional"
    CONVERSATIONAL = "conversational"

    __str__ = str.__str__


CategoryOrStr: TypeAlias = Annotated[Category | str, open_enum_validator(Category)]
