from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget77(str, Enum):
    COMPREHEND_20171127_LIST_ENTITY_RECOGNIZER_SUMMARIES = "Comprehend_20171127.ListEntityRecognizerSummaries"

    __str__ = str.__str__


XAmzTarget77OrStr: TypeAlias = Annotated[XAmzTarget77 | str, open_enum_validator(XAmzTarget77)]
