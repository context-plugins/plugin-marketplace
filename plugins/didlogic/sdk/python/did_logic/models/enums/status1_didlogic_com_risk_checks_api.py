from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DidlogicComRiskChecksApi(str, Enum):
    """Task status"""

    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


Status1DidlogicComRiskChecksApiOrStr: TypeAlias = Annotated[
    Status1DidlogicComRiskChecksApi | str, open_enum_validator(Status1DidlogicComRiskChecksApi)
]
