from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevDecisionSessionsApi(str, Enum):
    OPEN = "open"
    VERIFIED = "verified"
    COMPLETE = "complete"
    EXPIRED = "expired"

    __str__ = str.__str__


StatusDeliverdDevDecisionSessionsApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevDecisionSessionsApi | str, open_enum_validator(StatusDeliverdDevDecisionSessionsApi)
]
