from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Classification(str, Enum):
    """Environment classification."""

    PRODUCTION = "PRODUCTION"
    TEST = "TEST"

    __str__ = str.__str__


ClassificationOrStr: TypeAlias = Annotated[Classification | str, open_enum_validator(Classification)]
