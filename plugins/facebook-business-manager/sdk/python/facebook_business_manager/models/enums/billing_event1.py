from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingEvent1(str, Enum):
    IMPRESSIONS = "IMPRESSIONS"
    LINK_CLICKS = "LINK_CLICKS"

    __str__ = str.__str__


BillingEvent1OrStr: TypeAlias = Annotated[BillingEvent1 | str, open_enum_validator(BillingEvent1)]
