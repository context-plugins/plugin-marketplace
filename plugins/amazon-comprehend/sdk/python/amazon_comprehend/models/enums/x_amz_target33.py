from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget33(str, Enum):
    COMPREHEND_20171127_DESCRIBE_FLYWHEEL = "Comprehend_20171127.DescribeFlywheel"

    __str__ = str.__str__


XAmzTarget33OrStr: TypeAlias = Annotated[XAmzTarget33 | str, open_enum_validator(XAmzTarget33)]
