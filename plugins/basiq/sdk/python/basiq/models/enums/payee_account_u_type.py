from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PayeeAccountUType(str, Enum):
    """The type of domestic payee account."""

    ACCOUNT = "account"
    PAY_ID = "payId"

    __str__ = str.__str__


PayeeAccountUTypeOrStr: TypeAlias = Annotated[PayeeAccountUType | str, open_enum_validator(PayeeAccountUType)]
