from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UpdateCreditCurrencyRequestStatus(str, Enum):
    """Set to ``archived`` to archive this credit currency, or ``active`` to restore it."""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


UpdateCreditCurrencyRequestStatusOrStr: TypeAlias = Annotated[
    UpdateCreditCurrencyRequestStatus | str, open_enum_validator(UpdateCreditCurrencyRequestStatus)
]
