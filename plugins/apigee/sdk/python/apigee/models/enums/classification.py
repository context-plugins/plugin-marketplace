from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Classification(str, Enum):
    """Output only. The classification of the discovered API operation."""

    CLASSIFICATION_UNSPECIFIED = "CLASSIFICATION_UNSPECIFIED"
    KNOWN = "KNOWN"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


ClassificationOrStr: TypeAlias = Annotated[Classification | str, open_enum_validator(Classification)]
