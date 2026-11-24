from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget38(str, Enum):
    COMPREHEND_20171127_PUT_RESOURCE_POLICY = "Comprehend_20171127.PutResourcePolicy"

    __str__ = str.__str__


XAmzTarget38OrStr: TypeAlias = Annotated[XAmzTarget38 | str, open_enum_validator(XAmzTarget38)]
