from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectRelmCrmContactsApi(str, Enum):
    CONTACT = "contact"

    __str__ = str.__str__


ObjectRelmCrmContactsApiOrStr: TypeAlias = Annotated[
    ObjectRelmCrmContactsApi | str, open_enum_validator(ObjectRelmCrmContactsApi)
]
