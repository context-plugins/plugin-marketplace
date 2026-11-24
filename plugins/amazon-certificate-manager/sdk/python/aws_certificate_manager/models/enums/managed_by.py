from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ManagedBy(str, Enum):
    """Identifies the Amazon Web Services service that manages the certificate issued by ACM."""

    CLOUDFRONT = "CLOUDFRONT"

    __str__ = str.__str__


ManagedByOrStr: TypeAlias = Annotated[ManagedBy | str, open_enum_validator(ManagedBy)]
