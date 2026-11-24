from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpaySubscriptionsApi(str, Enum):
    SUBSCRIPTION = "subscription"

    __str__ = str.__str__


EntityRazorpaySubscriptionsApiOrStr: TypeAlias = Annotated[
    EntityRazorpaySubscriptionsApi | str, open_enum_validator(EntityRazorpaySubscriptionsApi)
]
