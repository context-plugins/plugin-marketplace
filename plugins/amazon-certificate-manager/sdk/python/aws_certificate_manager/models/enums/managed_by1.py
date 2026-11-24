from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ManagedBy1(str, Enum):
    """Filter by the entity that manages the certificate."""

    CLOUDFRONT = "CLOUDFRONT"

    __str__ = str.__str__


ManagedBy1OrStr: TypeAlias = Annotated[ManagedBy1 | str, open_enum_validator(ManagedBy1)]
