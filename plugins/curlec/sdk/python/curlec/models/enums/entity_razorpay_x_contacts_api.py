from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayXContactsApi(str, Enum):
    CONTACT = "contact"

    __str__ = str.__str__


EntityRazorpayXContactsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayXContactsApi | str, open_enum_validator(EntityRazorpayXContactsApi)
]
