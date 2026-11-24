from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActionOnFailedPrimaryWorkers(str, Enum):
    FAILURE_ACTION_UNSPECIFIED = "FAILURE_ACTION_UNSPECIFIED"
    NO_ACTION = "NO_ACTION"
    DELETE = "DELETE"

    __str__ = str.__str__


ActionOnFailedPrimaryWorkersOrStr: TypeAlias = Annotated[
    ActionOnFailedPrimaryWorkers | str, open_enum_validator(ActionOnFailedPrimaryWorkers)
]
