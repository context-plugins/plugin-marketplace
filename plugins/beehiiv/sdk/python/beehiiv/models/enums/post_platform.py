from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostPlatform(str, Enum):
    """The platform that the post is or will be published to."""

    WEB = "web"
    EMAIL = "email"
    BOTH = "both"

    __str__ = str.__str__


PostPlatformOrStr: TypeAlias = Annotated[PostPlatform | str, open_enum_validator(PostPlatform)]
