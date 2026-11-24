from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode1(str, Enum):
    """Classification mode indicates whether the documents are MULTI_CLASS or MULTI_LABEL."""

    MULTI_CLASS = "MULTI_CLASS"
    MULTI_LABEL = "MULTI_LABEL"

    __str__ = str.__str__


Mode1OrStr: TypeAlias = Annotated[Mode1 | str, open_enum_validator(Mode1)]
