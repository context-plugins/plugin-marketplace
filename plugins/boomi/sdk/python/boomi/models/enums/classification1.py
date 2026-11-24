from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Classification1(str, Enum):
    """Whether this is a production or test environment."""

    PRODUCTION = "PRODUCTION"
    TEST = "TEST"

    __str__ = str.__str__


Classification1OrStr: TypeAlias = Annotated[Classification1 | str, open_enum_validator(Classification1)]
