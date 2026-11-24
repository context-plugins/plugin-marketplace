from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1RazorpayVirtualAccountsApi(str, Enum):
    VPA = "vpa"

    __str__ = str.__str__


Type1RazorpayVirtualAccountsApiOrStr: TypeAlias = Annotated[
    Type1RazorpayVirtualAccountsApi | str, open_enum_validator(Type1RazorpayVirtualAccountsApi)
]
