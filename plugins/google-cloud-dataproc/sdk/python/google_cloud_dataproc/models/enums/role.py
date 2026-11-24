from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Role(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    CONTROLLER = "CONTROLLER"
    SPARK_DRIVER = "SPARK_DRIVER"
    SPARK_EXECUTOR = "SPARK_EXECUTOR"

    __str__ = str.__str__


RoleOrStr: TypeAlias = Annotated[Role | str, open_enum_validator(Role)]
