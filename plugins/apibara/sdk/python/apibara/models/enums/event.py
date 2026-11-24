from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event(str, Enum):
    LOT_CREATED = "lot.created"
    LOT_UPDATED = "lot.updated"
    LOT_SOLD = "lot.sold"
    LOT_NOT_SOLD = "lot.not_sold"
    LOT_REMOVED = "lot.removed"
    AUCTION_RESCHEDULED = "auction.rescheduled"
    AUCTION_ENDED = "auction.ended"
    BID_CHANGED = "bid.changed"
    BUY_NOW_CHANGED = "buy_now.changed"
    RESERVE_CHANGED = "reserve.changed"

    __str__ = str.__str__


EventOrStr: TypeAlias = Annotated[Event | str, open_enum_validator(Event)]
