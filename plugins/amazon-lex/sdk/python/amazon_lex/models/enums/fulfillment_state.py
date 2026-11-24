from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FulfillmentState(str, Enum):
    """The fulfillment state of the intent. The possible values are: Failed - The Lambda function associated with the
    intent failed to fulfill the intent. Fulfilled - The intent has fulfilled by the Lambda function associated with the
    intent. ReadyForFulfillment - All of the information necessary for the intent is present and the intent ready to be
    fulfilled by the client application."""

    FULFILLED = "Fulfilled"
    FAILED = "Failed"
    READY_FOR_FULFILLMENT = "ReadyForFulfillment"

    __str__ = str.__str__


FulfillmentStateOrStr: TypeAlias = Annotated[FulfillmentState | str, open_enum_validator(FulfillmentState)]
