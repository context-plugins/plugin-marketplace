from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreditBenefitInputRecipient(str, Enum):
    ORGANIZATION = "organization"
    SEAT = "seat"

    __str__ = str.__str__


CreditBenefitInputRecipientOrStr: TypeAlias = Annotated[
    CreditBenefitInputRecipient | str, open_enum_validator(CreditBenefitInputRecipient)
]
