from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityTypeLushaWebhooksApi(str, Enum):
    CONTACT = "contact"
    COMPANY = "company"

    __str__ = str.__str__


EntityTypeLushaWebhooksApiOrStr: TypeAlias = Annotated[
    EntityTypeLushaWebhooksApi | str, open_enum_validator(EntityTypeLushaWebhooksApi)
]
