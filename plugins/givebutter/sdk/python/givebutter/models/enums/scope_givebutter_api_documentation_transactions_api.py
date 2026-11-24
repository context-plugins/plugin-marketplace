from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScopeGivebutterApiDocumentationTransactionsApi(str, Enum):
    ALL = "all"
    BENEFITING = "benefiting"
    CHAPTERS = "chapters"

    __str__ = str.__str__


ScopeGivebutterApiDocumentationTransactionsApiOrStr: TypeAlias = Annotated[
    ScopeGivebutterApiDocumentationTransactionsApi | str,
    open_enum_validator(ScopeGivebutterApiDocumentationTransactionsApi),
]
