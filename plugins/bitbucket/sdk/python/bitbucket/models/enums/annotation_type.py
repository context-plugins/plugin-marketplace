from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AnnotationType(str, Enum):
    """The type of the report."""

    VULNERABILITY = "VULNERABILITY"
    CODE_SMELL = "CODE_SMELL"
    BUG = "BUG"

    __str__ = str.__str__


AnnotationTypeOrStr: TypeAlias = Annotated[AnnotationType | str, open_enum_validator(AnnotationType)]
