from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlatformScope(str, Enum):
    INSTAGRAM = "INSTAGRAM"
    FACEBOOK = "FACEBOOK"
    BOTH = "BOTH"
    TIKTOK = "TIKTOK"

    __str__ = str.__str__


PlatformScopeOrStr: TypeAlias = Annotated[PlatformScope | str, open_enum_validator(PlatformScope)]
