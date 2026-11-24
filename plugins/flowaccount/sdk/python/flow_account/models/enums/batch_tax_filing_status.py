from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BatchTaxFilingStatus(int, Enum):
    """1 = Awaiting 3 = Refunded"""

    VALUE_1 = 1
    VALUE_3 = 3

    __str__ = str.__str__


BatchTaxFilingStatusOrInt: TypeAlias = Annotated[BatchTaxFilingStatus | int, open_enum_validator(BatchTaxFilingStatus)]
