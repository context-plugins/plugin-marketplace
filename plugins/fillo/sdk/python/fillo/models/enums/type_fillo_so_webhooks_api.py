from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeFilloSoWebhooksApi(str, Enum):
    NONE = "none"
    BEARER = "bearer"
    X_API_KEY = "x-api-key"

    __str__ = str.__str__


TypeFilloSoWebhooksApiOrStr: TypeAlias = Annotated[
    TypeFilloSoWebhooksApi | str, open_enum_validator(TypeFilloSoWebhooksApi)
]
