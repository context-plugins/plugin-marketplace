from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionsListRequestExpandItem(str, Enum):
    STATS = "stats"
    CUSTOM_FIELDS = "custom_fields"
    REFERRALS = "referrals"
    NEWSLETTER_LISTS = "newsletter_lists"

    __str__ = str.__str__


SubscriptionsListRequestExpandItemOrStr: TypeAlias = Annotated[
    SubscriptionsListRequestExpandItem | str, open_enum_validator(SubscriptionsListRequestExpandItem)
]
