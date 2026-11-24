from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget31(str, Enum):
    COMPREHEND_20171127_CREATE_FLYWHEEL = "Comprehend_20171127.CreateFlywheel"

    __str__ = str.__str__


XAmzTarget31OrStr: TypeAlias = Annotated[XAmzTarget31 | str, open_enum_validator(XAmzTarget31)]
