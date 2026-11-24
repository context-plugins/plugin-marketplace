from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusTabbyApiReferencePaymentsApi(str, Enum):
    """Status of the order."""

    NEW = "new"
    PROCESSING = "processing"
    COMPLETE = "complete"
    REFUNDED = "refunded"
    CANCELED = "canceled"
    UNKNOWN = "unknown"

    __str__ = str.__str__


StatusTabbyApiReferencePaymentsApiOrStr: TypeAlias = Annotated[
    StatusTabbyApiReferencePaymentsApi | str, open_enum_validator(StatusTabbyApiReferencePaymentsApi)
]
