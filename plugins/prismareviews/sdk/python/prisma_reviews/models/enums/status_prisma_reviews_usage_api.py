from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusPrismaReviewsUsageApi(str, Enum):
    """``verify_email``: verify the account email first. ``not_applicable``: the workspace has paid reads of its own,
    used instead."""

    AVAILABLE = "available"
    ACTIVE = "active"
    USED_UP = "used_up"
    VERIFY_EMAIL = "verify_email"
    NOT_APPLICABLE = "not_applicable"

    __str__ = str.__str__


StatusPrismaReviewsUsageApiOrStr: TypeAlias = Annotated[
    StatusPrismaReviewsUsageApi | str, open_enum_validator(StatusPrismaReviewsUsageApi)
]
