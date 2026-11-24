from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class License(str, Enum):
    PUBLIC = "Public"
    SHARE = "Share"
    SHARE_COMMERCIALLY = "ShareCommercially"
    MODIFY = "Modify"
    MODIFY_COMMERCIALLY = "ModifyCommercially"

    __str__ = str.__str__


LicenseOrStr: TypeAlias = Annotated[License | str, open_enum_validator(License)]
