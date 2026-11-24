from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayPlansApi(str, Enum):
    PLAN = "plan"

    __str__ = str.__str__


EntityRazorpayPlansApiOrStr: TypeAlias = Annotated[
    EntityRazorpayPlansApi | str, open_enum_validator(EntityRazorpayPlansApi)
]
