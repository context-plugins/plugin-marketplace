from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlanCreditBenefitRecipient(str, Enum):
    ORGANIZATION = "organization"
    SEAT = "seat"

    __str__ = str.__str__


PlanCreditBenefitRecipientOrStr: TypeAlias = Annotated[
    PlanCreditBenefitRecipient | str, open_enum_validator(PlanCreditBenefitRecipient)
]
