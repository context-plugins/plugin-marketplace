from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModeDeliverdDevTasksApi(str, Enum):
    ALLOWED = "allowed"
    APPROVAL = "approval"
    DENIED = "denied"

    __str__ = str.__str__


ModeDeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    ModeDeliverdDevTasksApi | str, open_enum_validator(ModeDeliverdDevTasksApi)
]
