from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayXFundAccountsApi(str, Enum):
    FUND_ACCOUNT = "fund_account"

    __str__ = str.__str__


EntityRazorpayXFundAccountsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayXFundAccountsApi | str, open_enum_validator(EntityRazorpayXFundAccountsApi)
]
