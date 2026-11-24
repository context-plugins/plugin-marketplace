from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBundleSocialOrganizationApi(str, Enum):
    TRIALING = "trialing"
    ACTIVE = "active"
    CANCELED = "canceled"
    INCOMPLETE = "incomplete"
    INCOMPLETE_EXPIRED = "incomplete_expired"
    PAST_DUE = "past_due"
    UNPAID = "unpaid"
    PAUSED = "paused"

    __str__ = str.__str__


StatusBundleSocialOrganizationApiOrStr: TypeAlias = Annotated[
    StatusBundleSocialOrganizationApi | str, open_enum_validator(StatusBundleSocialOrganizationApi)
]
