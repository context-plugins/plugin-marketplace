from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusJuriSignWebhooksApi(str, Enum):
    SUCCESS = "success"
    PENDING = "pending"
    FAILED = "failed"

    __str__ = str.__str__


StatusJuriSignWebhooksApiOrStr: TypeAlias = Annotated[
    StatusJuriSignWebhooksApi | str, open_enum_validator(StatusJuriSignWebhooksApi)
]
