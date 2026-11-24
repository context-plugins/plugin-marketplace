from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusLushaWebhooksApi(str, Enum):
    SUCCESS = "success"
    FAILED = "failed"
    PERMANENT_FAILURE = "permanent_failure"

    __str__ = str.__str__


StatusLushaWebhooksApiOrStr: TypeAlias = Annotated[
    StatusLushaWebhooksApi | str, open_enum_validator(StatusLushaWebhooksApi)
]
