from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusPrismaReviewsWebhooksApi(str, Enum):
    ACTIVE = "active"
    REAUTH_REQUIRED = "reauth_required"

    __str__ = str.__str__


StatusPrismaReviewsWebhooksApiOrStr: TypeAlias = Annotated[
    StatusPrismaReviewsWebhooksApi | str, open_enum_validator(StatusPrismaReviewsWebhooksApi)
]
