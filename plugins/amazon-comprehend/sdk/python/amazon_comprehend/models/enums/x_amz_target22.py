from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget22(str, Enum):
    COMPREHEND_20171127_CREATE_ENDPOINT = "Comprehend_20171127.CreateEndpoint"

    __str__ = str.__str__


XAmzTarget22OrStr: TypeAlias = Annotated[XAmzTarget22 | str, open_enum_validator(XAmzTarget22)]
