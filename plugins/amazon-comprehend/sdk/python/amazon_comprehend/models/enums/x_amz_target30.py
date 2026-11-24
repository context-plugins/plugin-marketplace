from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget30(str, Enum):
    COMPREHEND_20171127_LIST_ENTITY_RECOGNIZERS = "Comprehend_20171127.ListEntityRecognizers"

    __str__ = str.__str__


XAmzTarget30OrStr: TypeAlias = Annotated[XAmzTarget30 | str, open_enum_validator(XAmzTarget30)]
