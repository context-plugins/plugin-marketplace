from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type7BundleSocialSocialAccountApi(str, Enum):
    DISCORD = "DISCORD"
    SLACK = "SLACK"
    REDDIT = "REDDIT"
    PINTEREST = "PINTEREST"
    FACEBOOK = "FACEBOOK"
    INSTAGRAM = "INSTAGRAM"
    LINKEDIN = "LINKEDIN"
    YOUTUBE = "YOUTUBE"
    GOOGLE_BUSINESS = "GOOGLE_BUSINESS"

    __str__ = str.__str__


Type7BundleSocialSocialAccountApiOrStr: TypeAlias = Annotated[
    Type7BundleSocialSocialAccountApi | str, open_enum_validator(Type7BundleSocialSocialAccountApi)
]
