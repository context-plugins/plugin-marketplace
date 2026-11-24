from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IntentState(str, Enum):
    """The state of the intent that the utterance is associated to."""

    FAILED = "Failed"
    FULFILLED = "Fulfilled"
    IN_PROGRESS = "InProgress"
    READY_FOR_FULFILLMENT = "ReadyForFulfillment"
    WAITING = "Waiting"
    FULFILLMENT_IN_PROGRESS = "FulfillmentInProgress"

    __str__ = str.__str__


IntentStateOrStr: TypeAlias = Annotated[IntentState | str, open_enum_validator(IntentState)]
