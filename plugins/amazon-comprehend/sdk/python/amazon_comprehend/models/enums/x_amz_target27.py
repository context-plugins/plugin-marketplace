from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget27(str, Enum):
    COMPREHEND_20171127_CREATE_ENTITY_RECOGNIZER = "Comprehend_20171127.CreateEntityRecognizer"

    __str__ = str.__str__


XAmzTarget27OrStr: TypeAlias = Annotated[XAmzTarget27 | str, open_enum_validator(XAmzTarget27)]
