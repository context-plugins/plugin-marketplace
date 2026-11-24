from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1BundleSocialOrganizationApi(str, Enum):
    INSTAGRAM = "INSTAGRAM"
    FACEBOOK = "FACEBOOK"
    TIKTOK = "TIKTOK"

    __str__ = str.__str__


Type1BundleSocialOrganizationApiOrStr: TypeAlias = Annotated[
    Type1BundleSocialOrganizationApi | str, open_enum_validator(Type1BundleSocialOrganizationApi)
]
