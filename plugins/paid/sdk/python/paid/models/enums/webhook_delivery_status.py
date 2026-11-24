from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WebhookDeliveryStatus(str, Enum):
    SUCCESS = "success"
    FAILED = "failed"

    __str__ = str.__str__


WebhookDeliveryStatusOrStr: TypeAlias = Annotated[
    WebhookDeliveryStatus | str, open_enum_validator(WebhookDeliveryStatus)
]
