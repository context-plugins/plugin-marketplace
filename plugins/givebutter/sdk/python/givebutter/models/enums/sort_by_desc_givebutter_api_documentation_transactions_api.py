from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByDescGivebutterApiDocumentationTransactionsApi(str, Enum):
    AMOUNT = "amount"
    TRANSACTED_AT = "transacted_at"
    CREATED_AT = "created_at"
    CONTACT_NAME = "contact_name"

    __str__ = str.__str__


SortByDescGivebutterApiDocumentationTransactionsApiOrStr: TypeAlias = Annotated[
    SortByDescGivebutterApiDocumentationTransactionsApi | str,
    open_enum_validator(SortByDescGivebutterApiDocumentationTransactionsApi),
]
