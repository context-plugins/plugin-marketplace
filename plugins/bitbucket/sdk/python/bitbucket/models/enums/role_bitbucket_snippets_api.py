from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RoleBitbucketSnippetsApi(str, Enum):
    OWNER = "owner"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"

    __str__ = str.__str__


RoleBitbucketSnippetsApiOrStr: TypeAlias = Annotated[
    RoleBitbucketSnippetsApi | str, open_enum_validator(RoleBitbucketSnippetsApi)
]
