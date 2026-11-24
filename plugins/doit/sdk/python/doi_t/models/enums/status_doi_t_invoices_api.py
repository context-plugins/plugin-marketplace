from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTInvoicesApi(str, Enum):
    """Status of the invoice"""

    OPEN = "OPEN"
    PAST_DUE = "PAST DUE"
    PAID = "PAID"

    __str__ = str.__str__


StatusDoiTInvoicesApiOrStr: TypeAlias = Annotated[
    StatusDoiTInvoicesApi | str, open_enum_validator(StatusDoiTInvoicesApi)
]
