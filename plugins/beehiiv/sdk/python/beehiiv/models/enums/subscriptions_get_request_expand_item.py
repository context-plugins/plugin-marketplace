from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionsGetRequestExpandItem(str, Enum):
    STATS = "stats"
    CUSTOM_FIELDS = "custom_fields"
    REFERRALS = "referrals"
    TAGS = "tags"
    NEWSLETTER_LISTS = "newsletter_lists"

    __str__ = str.__str__


SubscriptionsGetRequestExpandItemOrStr: TypeAlias = Annotated[
    SubscriptionsGetRequestExpandItem | str, open_enum_validator(SubscriptionsGetRequestExpandItem)
]
