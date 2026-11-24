from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByDesc(str, Enum):
    NAME_OR_COMPANY = "name_or_company"
    PRIMARY_EMAIL = "primary_email"
    POINT_OF_CONTACT = "point_of_contact"
    CREATED_AT = "created_at"
    TOTAL_CONTRIBUTIONS = "total_contributions"
    RECURRING_CONTRIBUTIONS = "recurring_contributions"
    LAST_DONATION_AMOUNT = "last_donation_amount"

    __str__ = str.__str__


SortByDescOrStr: TypeAlias = Annotated[SortByDesc | str, open_enum_validator(SortByDesc)]
