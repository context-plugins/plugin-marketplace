from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget36(str, Enum):
    COMPREHEND_20171127_DELETE_RESOURCE_POLICY = "Comprehend_20171127.DeleteResourcePolicy"

    __str__ = str.__str__


XAmzTarget36OrStr: TypeAlias = Annotated[XAmzTarget36 | str, open_enum_validator(XAmzTarget36)]
