from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OptInStatus2(str, Enum):
    """Specifies if DevOps Guru is enabled for customer managed keys."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


OptInStatus2OrStr: TypeAlias = Annotated[OptInStatus2 | str, open_enum_validator(OptInStatus2)]
