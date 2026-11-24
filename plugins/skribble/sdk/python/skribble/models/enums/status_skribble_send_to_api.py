from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusSkribbleSendToApi(str, Enum):
    """Status of the Send-To request"""

    UNCLAIMED = "UNCLAIMED"
    EXPIRED = "EXPIRED"
    CLAIMED = "CLAIMED"
    SIGNING = "SIGNING"
    SIGNED = "SIGNED"
    WITHDRAWN = "WITHDRAWN"
    DECLINED = "DECLINED"

    __str__ = str.__str__


StatusSkribbleSendToApiOrStr: TypeAlias = Annotated[
    StatusSkribbleSendToApi | str, open_enum_validator(StatusSkribbleSendToApi)
]
