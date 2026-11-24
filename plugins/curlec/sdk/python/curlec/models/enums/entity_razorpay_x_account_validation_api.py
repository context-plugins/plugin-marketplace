from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayXAccountValidationApi(str, Enum):
    FUND_ACCOUNT_VALIDATION = "fund_account.validation"

    __str__ = str.__str__


EntityRazorpayXAccountValidationApiOrStr: TypeAlias = Annotated[
    EntityRazorpayXAccountValidationApi | str, open_enum_validator(EntityRazorpayXAccountValidationApi)
]
