from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind2(str, Enum):
    """The kind of the branch type."""

    FEATURE = "feature"
    BUGFIX = "bugfix"
    RELEASE = "release"
    HOTFIX = "hotfix"

    __str__ = str.__str__


Kind2OrStr: TypeAlias = Annotated[Kind2 | str, open_enum_validator(Kind2)]
