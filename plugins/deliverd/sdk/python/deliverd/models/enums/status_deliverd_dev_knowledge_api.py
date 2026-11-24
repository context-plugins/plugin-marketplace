from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevKnowledgeApi(str, Enum):
    CONFIRMED = "confirmed"
    PROPOSED = "proposed"
    REJECTED = "rejected"
    RETIRED = "retired"
    SUPERSEDED = "superseded"
    OPEN = "open"
    ALL = "all"

    __str__ = str.__str__


StatusDeliverdDevKnowledgeApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevKnowledgeApi | str, open_enum_validator(StatusDeliverdDevKnowledgeApi)
]
