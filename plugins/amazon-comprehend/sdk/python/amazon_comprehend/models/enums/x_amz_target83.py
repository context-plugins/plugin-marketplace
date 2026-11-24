from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget83(str, Enum):
    COMPREHEND_20171127_UNTAG_RESOURCE = "Comprehend_20171127.UntagResource"

    __str__ = str.__str__


XAmzTarget83OrStr: TypeAlias = Annotated[XAmzTarget83 | str, open_enum_validator(XAmzTarget83)]
