from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6(str, Enum):
    COMPREHEND_20171127_CLASSIFY_DOCUMENT = "Comprehend_20171127.ClassifyDocument"

    __str__ = str.__str__


XAmzTarget6OrStr: TypeAlias = Annotated[XAmzTarget6 | str, open_enum_validator(XAmzTarget6)]
