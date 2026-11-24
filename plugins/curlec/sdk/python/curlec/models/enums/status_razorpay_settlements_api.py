from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpaySettlementsApi(str, Enum):
    CREATED = "created"
    PROCESSED = "processed"
    FAILED = "failed"

    __str__ = str.__str__


StatusRazorpaySettlementsApiOrStr: TypeAlias = Annotated[
    StatusRazorpaySettlementsApi | str, open_enum_validator(StatusRazorpaySettlementsApi)
]
