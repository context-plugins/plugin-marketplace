from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget82(str, Enum):
    COMPREHEND_20171127_TAG_RESOURCE = "Comprehend_20171127.TagResource"

    __str__ = str.__str__


XAmzTarget82OrStr: TypeAlias = Annotated[XAmzTarget82 | str, open_enum_validator(XAmzTarget82)]
