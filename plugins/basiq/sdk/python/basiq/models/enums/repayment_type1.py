from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RepaymentType1(str, Enum):
    """Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST."""

    INTEREST_ONLY = "INTEREST_ONLY"
    PRINCIPAL_AND_INTEREST = "PRINCIPAL_AND_INTEREST"

    __str__ = str.__str__


RepaymentType1OrStr: TypeAlias = Annotated[RepaymentType1 | str, open_enum_validator(RepaymentType1)]
