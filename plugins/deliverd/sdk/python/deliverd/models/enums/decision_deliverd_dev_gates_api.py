from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DecisionDeliverdDevGatesApi(str, Enum):
    ALLOW = "ALLOW"
    APPROVAL_REQUIRED = "APPROVAL_REQUIRED"
    REVIEW_REQUIRED = "REVIEW_REQUIRED"
    DENY = "DENY"

    __str__ = str.__str__


DecisionDeliverdDevGatesApiOrStr: TypeAlias = Annotated[
    DecisionDeliverdDevGatesApi | str, open_enum_validator(DecisionDeliverdDevGatesApi)
]
