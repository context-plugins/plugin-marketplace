from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayLinkedAccountsApi(str, Enum):
    STAKEHOLDER = "stakeholder"

    __str__ = str.__str__


EntityRazorpayLinkedAccountsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayLinkedAccountsApi | str, open_enum_validator(EntityRazorpayLinkedAccountsApi)
]
