from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InstanceTenancy1(str, Enum):
    DEFAULT = "default"
    DEDICATED = "dedicated"
    HOST = "host"

    __str__ = str.__str__


InstanceTenancy1OrStr: TypeAlias = Annotated[InstanceTenancy1 | str, open_enum_validator(InstanceTenancy1)]
