from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PathType(str, Enum):
    """The type of the AS path segment. The valid values are seq (an ordered AS_SEQUENCE) and set (an unordered
    AS_SET)."""

    SEQ = "seq"
    SET = "set"

    __str__ = str.__str__


PathTypeOrStr: TypeAlias = Annotated[PathType | str, open_enum_validator(PathType)]
