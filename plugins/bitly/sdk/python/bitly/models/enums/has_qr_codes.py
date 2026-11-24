from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HasQrCodes(str, Enum):
    ON = "on"
    OFF = "off"
    BOTH = "both"

    __str__ = str.__str__


HasQrCodesOrStr: TypeAlias = Annotated[HasQrCodes | str, open_enum_validator(HasQrCodes)]
