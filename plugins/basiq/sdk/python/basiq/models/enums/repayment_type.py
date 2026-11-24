from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RepaymentType(str, Enum):
    """Options in place for repayments. If absent, the lending rate is applicable to all repayment types."""

    INTEREST_ONLY = "INTEREST_ONLY"
    PRINCIPAL_AND_INTEREST = "PRINCIPAL_AND_INTEREST"

    __str__ = str.__str__


RepaymentTypeOrStr: TypeAlias = Annotated[RepaymentType | str, open_enum_validator(RepaymentType)]
