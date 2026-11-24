from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectRelmCrmWebhooksApi(str, Enum):
    WEBHOOK = "webhook"

    __str__ = str.__str__


ObjectRelmCrmWebhooksApiOrStr: TypeAlias = Annotated[
    ObjectRelmCrmWebhooksApi | str, open_enum_validator(ObjectRelmCrmWebhooksApi)
]
