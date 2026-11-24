from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OutcomeDeliverdDevTasksApi(str, Enum):
    APPLIED = "applied"
    KEPT = "kept"
    DISCARDED = "discarded"

    __str__ = str.__str__


OutcomeDeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    OutcomeDeliverdDevTasksApi | str, open_enum_validator(OutcomeDeliverdDevTasksApi)
]
