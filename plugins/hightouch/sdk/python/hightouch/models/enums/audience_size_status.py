from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AudienceSizeStatus(str, Enum):
    PENDING = "pending"
    SUCCESS = "success"
    FAILED = "failed"
    CANCELLED = "cancelled"

    __str__ = str.__str__


AudienceSizeStatusOrStr: TypeAlias = Annotated[AudienceSizeStatus | str, open_enum_validator(AudienceSizeStatus)]
