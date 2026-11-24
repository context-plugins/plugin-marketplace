from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostPlatformFilter(str, Enum):
    WEB = "web"
    EMAIL = "email"
    BOTH = "both"
    ALL = "all"

    __str__ = str.__str__


PostPlatformFilterOrStr: TypeAlias = Annotated[PostPlatformFilter | str, open_enum_validator(PostPlatformFilter)]
