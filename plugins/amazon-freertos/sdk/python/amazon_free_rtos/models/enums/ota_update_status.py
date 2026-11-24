from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OtaUpdateStatus(str, Enum):
    CREATE_PENDING = "CREATE_PENDING"
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS"
    CREATE_COMPLETE = "CREATE_COMPLETE"
    CREATE_FAILED = "CREATE_FAILED"

    __str__ = str.__str__


OtaUpdateStatusOrStr: TypeAlias = Annotated[OtaUpdateStatus | str, open_enum_validator(OtaUpdateStatus)]
