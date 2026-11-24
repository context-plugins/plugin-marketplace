from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDidlogicComRiskChecksApi(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


StatusDidlogicComRiskChecksApiOrStr: TypeAlias = Annotated[
    StatusDidlogicComRiskChecksApi | str, open_enum_validator(StatusDidlogicComRiskChecksApi)
]
