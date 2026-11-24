from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget79(str, Enum):
    COMPREHEND_20171127_LIST_TAGS_FOR_RESOURCE = "Comprehend_20171127.ListTagsForResource"

    __str__ = str.__str__


XAmzTarget79OrStr: TypeAlias = Annotated[XAmzTarget79 | str, open_enum_validator(XAmzTarget79)]
