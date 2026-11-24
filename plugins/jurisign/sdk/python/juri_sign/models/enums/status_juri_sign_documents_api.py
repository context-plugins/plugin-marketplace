from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusJuriSignDocumentsApi(str, Enum):
    DRAFT = "draft"
    PENDING = "pending"
    COMPLETED = "completed"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusJuriSignDocumentsApiOrStr: TypeAlias = Annotated[
    StatusJuriSignDocumentsApi | str, open_enum_validator(StatusJuriSignDocumentsApi)
]
