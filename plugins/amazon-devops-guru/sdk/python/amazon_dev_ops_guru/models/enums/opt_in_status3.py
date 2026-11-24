from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OptInStatus3(str, Enum):
    """Specifies if DevOps Guru is enabled for KMS integration."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


OptInStatus3OrStr: TypeAlias = Annotated[OptInStatus3 | str, open_enum_validator(OptInStatus3)]
