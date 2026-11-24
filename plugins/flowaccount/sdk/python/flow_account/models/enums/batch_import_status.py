from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BatchImportStatus(int, Enum):
    """0 = None 1 = Awaiting 3 = Pending 5 = Failed 6 = HandledDuplicated 7 = Succeed"""

    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_6 = 6
    VALUE_7 = 7

    __str__ = str.__str__


BatchImportStatusOrInt: TypeAlias = Annotated[BatchImportStatus | int, open_enum_validator(BatchImportStatus)]
