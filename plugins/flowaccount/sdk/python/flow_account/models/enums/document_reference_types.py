from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DocumentReferenceTypes(int, Enum):
    """1 = ImportDocument 3 = PartialPayments 5 = Batch 7 = Etax 9 = MiigratePartialPayments 11 = BatchPartialPayments
    13 = DepositFirst 15 = DepositLast"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11
    VALUE_13 = 13
    VALUE_15 = 15

    __str__ = str.__str__


DocumentReferenceTypesOrInt: TypeAlias = Annotated[
    DocumentReferenceTypes | int, open_enum_validator(DocumentReferenceTypes)
]
