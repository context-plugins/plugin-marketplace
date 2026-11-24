from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevAiSystemsApi(str, Enum):
    ACTIVE = "active"
    RETIRED = "retired"

    __str__ = str.__str__


StatusDeliverdDevAiSystemsApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevAiSystemsApi | str, open_enum_validator(StatusDeliverdDevAiSystemsApi)
]
