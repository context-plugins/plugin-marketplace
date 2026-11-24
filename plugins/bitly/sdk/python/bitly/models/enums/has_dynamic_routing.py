from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HasDynamicRouting(str, Enum):
    ON = "on"
    OFF = "off"
    BOTH = "both"

    __str__ = str.__str__


HasDynamicRoutingOrStr: TypeAlias = Annotated[HasDynamicRouting | str, open_enum_validator(HasDynamicRouting)]
