from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductCreditBenefitInputRecipient(str, Enum):
    ORGANIZATION = "organization"
    SEAT = "seat"

    __str__ = str.__str__


ProductCreditBenefitInputRecipientOrStr: TypeAlias = Annotated[
    ProductCreditBenefitInputRecipient | str, open_enum_validator(ProductCreditBenefitInputRecipient)
]
