from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """The specific type of content in this sitemap. For example: ``web``."""

    WEB = "WEB"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    NEWS = "NEWS"
    MOBILE = "MOBILE"
    ANDROID_APP = "ANDROID_APP"
    PATTERN = "PATTERN"
    IOS_APP = "IOS_APP"
    DATA_FEED_ELEMENT = "DATA_FEED_ELEMENT"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
