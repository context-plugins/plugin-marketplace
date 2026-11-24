from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType(str, Enum):
    """The type of plan"""

    FLAT = "flat"
    USAGE = "usage"
    CREDIT = "credit"

    __str__ = str.__str__


PlansCurrentGetResponsesContentApplicationJsonSchemaPlanTypeOrStr: TypeAlias = Annotated[
    PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType | str,
    open_enum_validator(PlansCurrentGetResponsesContentApplicationJsonSchemaPlanType),
]
