from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1TabbyApiReferencePaymentsApi(str, Enum):
    AUTHORIZED = "authorized"
    CLOSED = "closed"
    REJECTED = "rejected"
    NEW = "new"
    CAPTURED = "captured"
    REFUNDED = "refunded"
    CANCELLED = "cancelled"

    __str__ = str.__str__


Status1TabbyApiReferencePaymentsApiOrStr: TypeAlias = Annotated[
    Status1TabbyApiReferencePaymentsApi | str, open_enum_validator(Status1TabbyApiReferencePaymentsApi)
]
