from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WarnCode(str, Enum):
    """The type of warning."""

    INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL = "INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL"
    INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL = "INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL"

    __str__ = str.__str__


WarnCodeOrStr: TypeAlias = Annotated[WarnCode | str, open_enum_validator(WarnCode)]
