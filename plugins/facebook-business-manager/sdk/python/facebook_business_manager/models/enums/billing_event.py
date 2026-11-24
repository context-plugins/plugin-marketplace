from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingEvent(str, Enum):
    """The event used for billing"""

    IMPRESSIONS = "IMPRESSIONS"
    LINK_CLICKS = "LINK_CLICKS"

    __str__ = str.__str__


BillingEventOrStr: TypeAlias = Annotated[BillingEvent | str, open_enum_validator(BillingEvent)]
