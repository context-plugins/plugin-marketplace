from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevGovernanceApi(str, Enum):
    OPEN = "open"
    RESOLVED = "resolved"

    __str__ = str.__str__


StatusDeliverdDevGovernanceApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevGovernanceApi | str, open_enum_validator(StatusDeliverdDevGovernanceApi)
]
