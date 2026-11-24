from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3BundleSocialSocialAccountApi(str, Enum):
    FACEBOOK = "FACEBOOK"
    INSTAGRAM = "INSTAGRAM"
    LINKEDIN = "LINKEDIN"
    YOUTUBE = "YOUTUBE"
    GOOGLE_BUSINESS = "GOOGLE_BUSINESS"

    __str__ = str.__str__


Type3BundleSocialSocialAccountApiOrStr: TypeAlias = Annotated[
    Type3BundleSocialSocialAccountApi | str, open_enum_validator(Type3BundleSocialSocialAccountApi)
]
