from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicationsBySubscriptionEmailRequestExpandItem(str, Enum):
    SUBSCRIPTION = "subscription"
    PUBLICATION = "publication"
    SUBSCRIPTION_CUSTOM_FIELDS = "subscription_custom_fields"

    __str__ = str.__str__


PublicationsBySubscriptionEmailRequestExpandItemOrStr: TypeAlias = Annotated[
    PublicationsBySubscriptionEmailRequestExpandItem | str,
    open_enum_validator(PublicationsBySubscriptionEmailRequestExpandItem),
]
