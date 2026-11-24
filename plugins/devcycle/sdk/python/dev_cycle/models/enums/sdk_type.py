from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SdkType(str, Enum):
    """DevCycle SDK type"""

    API = "api"
    SERVER = "server"
    CLIENT = "client"
    MOBILE = "mobile"

    __str__ = str.__str__


SdkTypeOrStr: TypeAlias = Annotated[SdkType | str, open_enum_validator(SdkType)]
