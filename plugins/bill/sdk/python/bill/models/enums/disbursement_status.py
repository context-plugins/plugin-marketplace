from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisbursementStatus(str, Enum):
    """The enum type for disbursement status."""

    SCHEDULE = "SCHEDULE"
    DONE = "DONE"
    FAILED = "FAILED"
    VOID = "VOID"
    HOLD = "HOLD"
    FXHOLD = "FXHOLD"
    ESCHEATED = "ESCHEATED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


DisbursementStatusOrStr: TypeAlias = Annotated[DisbursementStatus | str, open_enum_validator(DisbursementStatus)]
