from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget25(str, Enum):
    COMPREHEND_20171127_LIST_ENDPOINTS = "Comprehend_20171127.ListEndpoints"

    __str__ = str.__str__


XAmzTarget25OrStr: TypeAlias = Annotated[XAmzTarget25 | str, open_enum_validator(XAmzTarget25)]
