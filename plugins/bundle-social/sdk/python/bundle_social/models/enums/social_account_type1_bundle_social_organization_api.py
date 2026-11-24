from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SocialAccountType1BundleSocialOrganizationApi(str, Enum):
    INSTAGRAM = "INSTAGRAM"
    FACEBOOK = "FACEBOOK"
    TIKTOK = "TIKTOK"

    __str__ = str.__str__


SocialAccountType1BundleSocialOrganizationApiOrStr: TypeAlias = Annotated[
    SocialAccountType1BundleSocialOrganizationApi | str,
    open_enum_validator(SocialAccountType1BundleSocialOrganizationApi),
]
