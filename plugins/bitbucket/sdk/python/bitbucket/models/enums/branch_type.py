from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BranchType(str, Enum):
    """Apply the restriction to branches of this type. Active when ``branch_match_kind`` is ``branching_model``. The
    branch type will be calculated using the branching model configured for the repository."""

    FEATURE = "feature"
    BUGFIX = "bugfix"
    RELEASE = "release"
    HOTFIX = "hotfix"
    DEVELOPMENT = "development"
    PRODUCTION = "production"

    __str__ = str.__str__


BranchTypeOrStr: TypeAlias = Annotated[BranchType | str, open_enum_validator(BranchType)]
