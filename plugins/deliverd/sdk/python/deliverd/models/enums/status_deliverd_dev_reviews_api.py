from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevReviewsApi(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    CHANGES_REQUESTED = "changes_requested"
    EXPIRED = "expired"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusDeliverdDevReviewsApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevReviewsApi | str, open_enum_validator(StatusDeliverdDevReviewsApi)
]
