from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget28(str, Enum):
    COMPREHEND_20171127_DELETE_ENTITY_RECOGNIZER = "Comprehend_20171127.DeleteEntityRecognizer"

    __str__ = str.__str__


XAmzTarget28OrStr: TypeAlias = Annotated[XAmzTarget28 | str, open_enum_validator(XAmzTarget28)]
