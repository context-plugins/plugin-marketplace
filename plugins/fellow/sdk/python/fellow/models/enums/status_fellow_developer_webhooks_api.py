from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusFellowDeveloperWebhooksApi(str, Enum):
    """Webhook status. Valid values: 'active', 'inactive'"""

    ACTIVE = "active"
    INACTIVE = "inactive"

    __str__ = str.__str__


StatusFellowDeveloperWebhooksApiOrStr: TypeAlias = Annotated[
    StatusFellowDeveloperWebhooksApi | str, open_enum_validator(StatusFellowDeveloperWebhooksApi)
]
