from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IsPublic(str, Enum):
    """OPTIONAL. Whether the uploaded file is public or not regarding AWS link."""

    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


IsPublicOrStr: TypeAlias = Annotated[IsPublic | str, open_enum_validator(IsPublic)]
