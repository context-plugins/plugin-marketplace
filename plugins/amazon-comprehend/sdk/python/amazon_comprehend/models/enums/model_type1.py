from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModelType1(str, Enum):
    """Model type of the flywheel's model."""

    DOCUMENT_CLASSIFIER = "DOCUMENT_CLASSIFIER"
    ENTITY_RECOGNIZER = "ENTITY_RECOGNIZER"

    __str__ = str.__str__


ModelType1OrStr: TypeAlias = Annotated[ModelType1 | str, open_enum_validator(ModelType1)]
