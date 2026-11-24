from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusJuriSignPublicFormsApi(str, Enum):
    ACTIVE = "active"
    PAUSED = "paused"
    EXPIRED = "expired"

    __str__ = str.__str__


StatusJuriSignPublicFormsApiOrStr: TypeAlias = Annotated[
    StatusJuriSignPublicFormsApi | str, open_enum_validator(StatusJuriSignPublicFormsApi)
]
