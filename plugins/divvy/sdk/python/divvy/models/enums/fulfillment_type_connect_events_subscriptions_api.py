from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FulfillmentTypeConnectEventsSubscriptionsApi(str, Enum):
    """Enum for fulfillment type."""

    PAYROLL = "PAYROLL"
    ACH = "ACH"
    UNSPECIFIED = "UNSPECIFIED"

    __str__ = str.__str__


FulfillmentTypeConnectEventsSubscriptionsApiOrStr: TypeAlias = Annotated[
    FulfillmentTypeConnectEventsSubscriptionsApi | str,
    open_enum_validator(FulfillmentTypeConnectEventsSubscriptionsApi),
]
