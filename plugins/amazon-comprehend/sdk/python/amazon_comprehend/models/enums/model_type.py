from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModelType(str, Enum):
    """The model type. You need to set ModelType if you are creating a flywheel for a new model."""

    DOCUMENT_CLASSIFIER = "DOCUMENT_CLASSIFIER"
    ENTITY_RECOGNIZER = "ENTITY_RECOGNIZER"

    __str__ = str.__str__


ModelTypeOrStr: TypeAlias = Annotated[ModelType | str, open_enum_validator(ModelType)]
