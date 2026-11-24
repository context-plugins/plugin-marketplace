from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category(str, Enum):
    """The type of environment where the deployment event occurred."""

    PRODUCTION = "PRODUCTION"
    STAGING = "STAGING"
    TESTING = "TESTING"
    DEVELOPMENT = "DEVELOPMENT"
    UNMAPPED = "UNMAPPED"

    __str__ = str.__str__


CategoryOrStr: TypeAlias = Annotated[Category | str, open_enum_validator(Category)]
