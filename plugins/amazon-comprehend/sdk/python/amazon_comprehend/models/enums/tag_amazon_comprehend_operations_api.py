from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TagAmazonComprehendOperationsApi(str, Enum):
    """Identifies the part of speech that the token represents."""

    ADJ = "ADJ"
    ADP = "ADP"
    ADV = "ADV"
    AUX = "AUX"
    CONJ = "CONJ"
    CCONJ = "CCONJ"
    DET = "DET"
    INTJ = "INTJ"
    NOUN = "NOUN"
    NUM = "NUM"
    O_ = "O"
    PART = "PART"
    PRON = "PRON"
    PROPN = "PROPN"
    PUNCT = "PUNCT"
    SCONJ = "SCONJ"
    SYM = "SYM"
    VERB = "VERB"

    __str__ = str.__str__


TagAmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    TagAmazonComprehendOperationsApi | str, open_enum_validator(TagAmazonComprehendOperationsApi)
]
