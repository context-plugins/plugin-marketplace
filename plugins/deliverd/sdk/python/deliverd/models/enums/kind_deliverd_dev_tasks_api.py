from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindDeliverdDevTasksApi(str, Enum):
    OBJECTIVE = "objective"
    SIDE_TASK = "side_task"
    INVESTIGATION = "investigation"
    RESEARCH = "research"
    DEBUG = "debug"
    DECISION = "decision"

    __str__ = str.__str__


KindDeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    KindDeliverdDevTasksApi | str, open_enum_validator(KindDeliverdDevTasksApi)
]
