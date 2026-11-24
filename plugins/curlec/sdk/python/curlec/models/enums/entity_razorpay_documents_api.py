from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayDocumentsApi(str, Enum):
    DOCUMENT = "document"

    __str__ = str.__str__


EntityRazorpayDocumentsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayDocumentsApi | str, open_enum_validator(EntityRazorpayDocumentsApi)
]
