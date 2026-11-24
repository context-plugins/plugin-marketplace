from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusWebhooksApi(str, Enum):
    """status of the webhook."""

    ACTIVE = "active"
    PENDING_APPROVAL = "pending-approval"

    __str__ = str.__str__


StatusWebhooksApiOrStr: TypeAlias = Annotated[StatusWebhooksApi | str, open_enum_validator(StatusWebhooksApi)]
