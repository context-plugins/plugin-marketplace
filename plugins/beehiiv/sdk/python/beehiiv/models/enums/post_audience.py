from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PostAudience(str, Enum):
    """The audience that the post is available to on the web. Only applicable if the platform is ``web`` or ``both``."""

    FREE = "free"
    PREMIUM = "premium"
    BOTH = "both"

    __str__ = str.__str__


PostAudienceOrStr: TypeAlias = Annotated[PostAudience | str, open_enum_validator(PostAudience)]
