from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HasExpiration(str, Enum):
    ON = "on"
    OFF = "off"
    BOTH = "both"

    __str__ = str.__str__


HasExpirationOrStr: TypeAlias = Annotated[HasExpiration | str, open_enum_validator(HasExpiration)]
