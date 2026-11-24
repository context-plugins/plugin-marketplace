from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayPartnerWebhooksApi(str, Enum):
    WEBHOOK = "webhook"

    __str__ = str.__str__


EntityRazorpayPartnerWebhooksApiOrStr: TypeAlias = Annotated[
    EntityRazorpayPartnerWebhooksApi | str, open_enum_validator(EntityRazorpayPartnerWebhooksApi)
]
