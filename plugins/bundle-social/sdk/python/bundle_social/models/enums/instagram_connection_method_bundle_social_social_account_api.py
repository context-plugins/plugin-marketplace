from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InstagramConnectionMethodBundleSocialSocialAccountApi(str, Enum):
    """Instagram only - connection method"""

    FACEBOOK = "FACEBOOK"
    INSTAGRAM = "INSTAGRAM"

    __str__ = str.__str__


InstagramConnectionMethodBundleSocialSocialAccountApiOrStr: TypeAlias = Annotated[
    InstagramConnectionMethodBundleSocialSocialAccountApi | str,
    open_enum_validator(InstagramConnectionMethodBundleSocialSocialAccountApi),
]
