from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBundleSocialAutomationApi(str, Enum):
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    PAUSED = "PAUSED"
    ARCHIVED = "ARCHIVED"

    __str__ = str.__str__


StatusBundleSocialAutomationApiOrStr: TypeAlias = Annotated[
    StatusBundleSocialAutomationApi | str, open_enum_validator(StatusBundleSocialAutomationApi)
]
