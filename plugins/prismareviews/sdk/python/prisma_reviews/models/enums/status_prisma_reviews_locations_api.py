from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusPrismaReviewsLocationsApi(str, Enum):
    ACTIVE = "active"
    DISCONNECTED = "disconnected"

    __str__ = str.__str__


StatusPrismaReviewsLocationsApiOrStr: TypeAlias = Annotated[
    StatusPrismaReviewsLocationsApi | str, open_enum_validator(StatusPrismaReviewsLocationsApi)
]
