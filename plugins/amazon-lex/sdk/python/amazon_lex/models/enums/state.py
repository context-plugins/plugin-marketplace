from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """Indicates the fulfillment state for the intent. The meanings of each value are as follows: Failed – The bot
    failed to fulfill the intent. Fulfilled – The bot has completed fulfillment of the intent. FulfillmentInProgress –
    The bot is in the middle of fulfilling the intent. InProgress – The bot is in the middle of eliciting the slot
    values that are necessary to fulfill the intent. ReadyForFulfillment – The bot has elicited all the slot values for
    the intent and is ready to fulfill the intent. Waiting – The bot is waiting for a response from the user (limited to
    streaming conversations)."""

    FAILED = "Failed"
    FULFILLED = "Fulfilled"
    IN_PROGRESS = "InProgress"
    READY_FOR_FULFILLMENT = "ReadyForFulfillment"
    WAITING = "Waiting"
    FULFILLMENT_IN_PROGRESS = "FulfillmentInProgress"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
