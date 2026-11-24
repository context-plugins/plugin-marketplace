from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ServiceTier(str, Enum):
    AUTO = "auto"
    DEFAULT = "default"
    FLEX = "flex"
    SCALE = "scale"
    PRIORITY = "priority"

    __str__ = str.__str__


ServiceTierOrStr: TypeAlias = Annotated[ServiceTier | str, open_enum_validator(ServiceTier)]
