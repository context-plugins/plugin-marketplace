from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget81(str, Enum):
    COMPREHEND_20171127_STOP_TRAINING_ENTITY_RECOGNIZER = "Comprehend_20171127.StopTrainingEntityRecognizer"

    __str__ = str.__str__


XAmzTarget81OrStr: TypeAlias = Annotated[XAmzTarget81 | str, open_enum_validator(XAmzTarget81)]
