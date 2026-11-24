from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceTypeAlphAiRestSymbolsApi(str, Enum):
    """``sec_form8k`` for a US filer's item 2.02, ``sec_form6k`` for a foreign private issuer's earnings release."""

    SEC_FORM8K = "sec_form8k"
    SEC_FORM6K = "sec_form6k"

    __str__ = str.__str__


SourceTypeAlphAiRestSymbolsApiOrStr: TypeAlias = Annotated[
    SourceTypeAlphAiRestSymbolsApi | str, open_enum_validator(SourceTypeAlphAiRestSymbolsApi)
]
