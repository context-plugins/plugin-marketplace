from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name25 import Name25OrStr
from .enums.order2 import Order2OrStr


class SessionDataSortBy(SdkBaseModel):
    name: Name25OrStr
    """The measure by which to sort the session analytics data. conversationStartTime – The date and time when the
    conversation began. A conversation is defined as a unique combination of a sessionId and an originatingRequestId.
    numberOfTurns – The number of turns that the session took. conversationDurationSeconds – The duration of the
    conversation in seconds."""

    order: Order2OrStr
    """Specifies whether to sort the results in ascending or descending order."""


class SessionDataSortByDict(TypedDict):
    name: Name25OrStr
    order: Order2OrStr
