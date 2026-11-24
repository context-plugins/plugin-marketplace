from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JournalEntryTemplateType(int, Enum):
    """1 = Default 3 = DocumentCreated 5 = Payment 7 = ChequeDate 9 = TaxNoRefund 11 = VATManagementHistory"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11

    __str__ = str.__str__


JournalEntryTemplateTypeOrInt: TypeAlias = Annotated[
    JournalEntryTemplateType | int, open_enum_validator(JournalEntryTemplateType)
]
