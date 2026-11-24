from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2DoiTPerfectScaleForCommitmentsGcpApi(str, Enum):
    ACTIVE = "active"
    EXPIRED = "expired"
    CREATING = "creating"
    PENDING = "pending"
    CANCELLED = "cancelled"
    NOT_YET_ACTIVE = "not_yet_active"

    __str__ = str.__str__


Status2DoiTPerfectScaleForCommitmentsGcpApiOrStr: TypeAlias = Annotated[
    Status2DoiTPerfectScaleForCommitmentsGcpApi | str, open_enum_validator(Status2DoiTPerfectScaleForCommitmentsGcpApi)
]
