from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentPurposeType(str, Enum):
    """Type of payment purpose."""

    CODE = "CODE"
    TEXT = "TEXT"

    __str__ = str.__str__


PaymentPurposeTypeOrStr: TypeAlias = Annotated[PaymentPurposeType | str, open_enum_validator(PaymentPurposeType)]
