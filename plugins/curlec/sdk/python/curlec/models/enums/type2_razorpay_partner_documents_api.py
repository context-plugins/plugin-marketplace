from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2RazorpayPartnerDocumentsApi(str, Enum):
    PERSONAL_PAN = "personal_pan"

    __str__ = str.__str__


Type2RazorpayPartnerDocumentsApiOrStr: TypeAlias = Annotated[
    Type2RazorpayPartnerDocumentsApi | str, open_enum_validator(Type2RazorpayPartnerDocumentsApi)
]
