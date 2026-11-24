from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Cloud(str, Enum):
    """Cloud the scope belongs to."""

    AWS = "aws"
    GCP = "gcp"

    __str__ = str.__str__


CloudOrStr: TypeAlias = Annotated[Cloud | str, open_enum_validator(Cloud)]
