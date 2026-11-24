from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusJuriSignSignRequestsApi(str, Enum):
    DRAFT = "draft"
    PENDING = "pending"
    COMPLETED = "completed"
    CANCELLED = "cancelled"
    EXPIRED = "expired"

    __str__ = str.__str__


StatusJuriSignSignRequestsApiOrStr: TypeAlias = Annotated[
    StatusJuriSignSignRequestsApi | str, open_enum_validator(StatusJuriSignSignRequestsApi)
]
