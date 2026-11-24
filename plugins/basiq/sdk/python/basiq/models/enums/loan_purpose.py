from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LoanPurpose(str, Enum):
    """The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes."""

    INVESTMENT = "INVESTMENT"
    OWNER_OCCUPIED = "OWNER_OCCUPIED"

    __str__ = str.__str__


LoanPurposeOrStr: TypeAlias = Annotated[LoanPurpose | str, open_enum_validator(LoanPurpose)]
