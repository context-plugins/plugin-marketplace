from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAmazonTranscribeServiceOperationsApi(str, Enum):
    """The type of item identified. Options are: PRONUNCIATION (spoken words) and PUNCTUATION."""

    PRONUNCIATION = "pronunciation"
    PUNCTUATION = "punctuation"

    __str__ = str.__str__


TypeAmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    TypeAmazonTranscribeServiceOperationsApi | str, open_enum_validator(TypeAmazonTranscribeServiceOperationsApi)
]
