from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1JuriSignSignRequestsApi(str, Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    PAID = "paid"
    FAILED = "failed"
    CANCELED = "canceled"
    EXPIRED = "expired"

    __str__ = str.__str__


Status1JuriSignSignRequestsApiOrStr: TypeAlias = Annotated[
    Status1JuriSignSignRequestsApi | str, open_enum_validator(Status1JuriSignSignRequestsApi)
]
