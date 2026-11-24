from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DiscountEligibilityType(str, Enum):
    """The type of the specific eligibility constraint for a discountType."""

    BUSINESS = "BUSINESS"
    EMPLOYMENT_STATUS = "EMPLOYMENT_STATUS"
    INTRODUCTORY = "INTRODUCTORY"
    MAX_AGE = "MAX_AGE"
    MIN_AGE = "MIN_AGE"
    MIN_INCOME = "MIN_INCOME"
    MIN_TURNOVER = "MIN_TURNOVER"
    NATURAL_PERSON = "NATURAL_PERSON"
    OTHER = "OTHER"
    PENSION_RECIPIENT = "PENSION_RECIPIENT"
    RESIDENCY_STATUS = "RESIDENCY_STATUS"
    STAFF = "STAFF"
    STUDENT = "STUDENT"

    __str__ = str.__str__


DiscountEligibilityTypeOrStr: TypeAlias = Annotated[
    DiscountEligibilityType | str, open_enum_validator(DiscountEligibilityType)
]
