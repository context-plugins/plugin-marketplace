from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event1(str, Enum):
    SHOP_TEST = "shop.test"
    SHOP_INCOMING_MESSAGE = "shop.incoming_message"
    SHOP_SUBSCRIBER_OPT_IN = "shop.subscriber.opt_in"
    SHOP_SUBSCRIBER_OPT_OUT = "shop.subscriber.opt_out"
    SHOP_EMAIL_COLLECTED = "shop.email_collected"

    __str__ = str.__str__


Event1OrStr: TypeAlias = Annotated[Event1 | str, open_enum_validator(Event1)]
