from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AccountTypeDynamics365BusinessCentralApiV20JournalsApi(str, Enum):
    G_L_ACCOUNT = "G/L Account"
    CUSTOMER = "Customer"
    VENDOR = "Vendor"
    BANK_ACCOUNT = "Bank Account"
    FIXED_ASSET = "Fixed Asset"
    EMPLOYEE = "Employee"

    __str__ = str.__str__


AccountTypeDynamics365BusinessCentralApiV20JournalsApiOrStr: TypeAlias = Annotated[
    AccountTypeDynamics365BusinessCentralApiV20JournalsApi | str,
    open_enum_validator(AccountTypeDynamics365BusinessCentralApiV20JournalsApi),
]
