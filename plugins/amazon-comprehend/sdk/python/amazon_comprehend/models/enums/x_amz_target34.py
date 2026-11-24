from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget34(str, Enum):
    COMPREHEND_20171127_LIST_FLYWHEELS = "Comprehend_20171127.ListFlywheels"

    __str__ = str.__str__


XAmzTarget34OrStr: TypeAlias = Annotated[XAmzTarget34 | str, open_enum_validator(XAmzTarget34)]
