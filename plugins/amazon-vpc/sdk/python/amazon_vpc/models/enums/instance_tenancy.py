from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InstanceTenancy(str, Enum):
    """The allowed tenancy of instances launched into the VPC"""

    DEFAULT = "default"
    DEDICATED = "dedicated"
    HOST = "host"

    __str__ = str.__str__


InstanceTenancyOrStr: TypeAlias = Annotated[InstanceTenancy | str, open_enum_validator(InstanceTenancy)]
