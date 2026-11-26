from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OwnershipFormAlphAiRestSymbolsApi(str, Enum):
    """Direct or indirect holding pool."""

    D = "D"
    I_ = "I"

    __str__ = str.__str__


OwnershipFormAlphAiRestSymbolsApiOrStr: TypeAlias = Annotated[
    OwnershipFormAlphAiRestSymbolsApi | str, open_enum_validator(OwnershipFormAlphAiRestSymbolsApi)
]
