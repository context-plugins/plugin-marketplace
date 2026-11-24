from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget23(str, Enum):
    COMPREHEND_20171127_DELETE_ENDPOINT = "Comprehend_20171127.DeleteEndpoint"

    __str__ = str.__str__


XAmzTarget23OrStr: TypeAlias = Annotated[XAmzTarget23 | str, open_enum_validator(XAmzTarget23)]
