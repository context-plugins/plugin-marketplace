from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScmBitbucketSnippetsApi(str, Enum):
    """The DVCS used to store the snippet."""

    GIT = "git"

    __str__ = str.__str__


ScmBitbucketSnippetsApiOrStr: TypeAlias = Annotated[
    ScmBitbucketSnippetsApi | str, open_enum_validator(ScmBitbucketSnippetsApi)
]
