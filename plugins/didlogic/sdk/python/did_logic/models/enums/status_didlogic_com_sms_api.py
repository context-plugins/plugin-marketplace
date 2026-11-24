from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDidlogicComSmsApi(str, Enum):
    """Delivery status"""

    CREATED = "created"
    FAILED = "failed"
    SENT = "sent"
    DLR_ERROR = "dlr_error"
    DELIVERED = "delivered"
    NOT_DELIVERED = "not_delivered"
    INTERRUPTED = "interrupted"

    __str__ = str.__str__


StatusDidlogicComSmsApiOrStr: TypeAlias = Annotated[
    StatusDidlogicComSmsApi | str, open_enum_validator(StatusDidlogicComSmsApi)
]
