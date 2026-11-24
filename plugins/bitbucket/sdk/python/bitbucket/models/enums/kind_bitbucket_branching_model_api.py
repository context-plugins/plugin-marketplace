from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindBitbucketBranchingModelApi(str, Enum):
    """The kind of branch."""

    FEATURE = "feature"
    BUGFIX = "bugfix"
    RELEASE = "release"
    HOTFIX = "hotfix"

    __str__ = str.__str__


KindBitbucketBranchingModelApiOrStr: TypeAlias = Annotated[
    KindBitbucketBranchingModelApi | str, open_enum_validator(KindBitbucketBranchingModelApi)
]
