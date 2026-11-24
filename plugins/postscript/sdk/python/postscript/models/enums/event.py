from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event(str, Enum):
    """Webhook subscription event type."""

    SHOP_TEST = "shop.test"
    SHOP_INCOMING_MESSAGE = "shop.incoming_message"
    SHOP_SUBSCRIBER_OPT_IN = "shop.subscriber.opt_in"
    SHOP_SUBSCRIBER_OPT_OUT = "shop.subscriber.opt_out"
    SHOP_SHOP_EMAIL_COLLECTED = "shop.shop.email_collected"

    __str__ = str.__str__


EventOrStr: TypeAlias = Annotated[Event | str, open_enum_validator(Event)]
