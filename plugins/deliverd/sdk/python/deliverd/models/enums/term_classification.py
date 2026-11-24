from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TermClassification(str, Enum):
    """With counts: the strictest classification among the terms found"""

    CONFIDENTIAL = "confidential"
    RESTRICTED = "restricted"

    __str__ = str.__str__


TermClassificationOrStr: TypeAlias = Annotated[TermClassification | str, open_enum_validator(TermClassification)]
