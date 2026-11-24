from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RefType(str, Enum):
    """The type of reference (branch/tag)."""

    BRANCH = "branch"
    TAG = "tag"
    NAMED_BRANCH = "named_branch"
    BOOKMARK = "bookmark"

    __str__ = str.__str__


RefTypeOrStr: TypeAlias = Annotated[RefType | str, open_enum_validator(RefType)]
