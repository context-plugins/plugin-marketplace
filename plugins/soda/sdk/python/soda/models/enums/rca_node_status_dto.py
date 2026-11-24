from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RcaNodeStatusDto(str, Enum):
    ROOT_CAUSE = "rootCause"
    AFFECTED = "affected"
    HEALTHY = "healthy"

    __str__ = str.__str__


RcaNodeStatusDtoOrStr: TypeAlias = Annotated[RcaNodeStatusDto | str, open_enum_validator(RcaNodeStatusDto)]
