from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VendorBankAccountStatusResponse(str, Enum):
    """BankAccountStatus."""

    NO_ACCOUNT = "NO_ACCOUNT"
    NO_NET_LINKED_ACCOUNT = "NO_NET_LINKED_ACCOUNT"
    NET_LINKED_ACCOUNT = "NET_LINKED_ACCOUNT"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


VendorBankAccountStatusResponseOrStr: TypeAlias = Annotated[
    VendorBankAccountStatusResponse | str, open_enum_validator(VendorBankAccountStatusResponse)
]
