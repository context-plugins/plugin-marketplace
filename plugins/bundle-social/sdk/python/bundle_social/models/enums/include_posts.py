from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncludePosts(str, Enum):
    TRUE = "true"

    __str__ = str.__str__


IncludePostsOrStr: TypeAlias = Annotated[IncludePosts | str, open_enum_validator(IncludePosts)]
