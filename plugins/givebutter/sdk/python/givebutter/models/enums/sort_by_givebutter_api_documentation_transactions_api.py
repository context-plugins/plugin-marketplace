from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByGivebutterApiDocumentationTransactionsApi(str, Enum):
    AMOUNT = "amount"
    TRANSACTED_AT = "transacted_at"
    CREATED_AT = "created_at"
    CONTACT_NAME = "contact_name"

    __str__ = str.__str__


SortByGivebutterApiDocumentationTransactionsApiOrStr: TypeAlias = Annotated[
    SortByGivebutterApiDocumentationTransactionsApi | str,
    open_enum_validator(SortByGivebutterApiDocumentationTransactionsApi),
]
