from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectRelmCrmBatchApi(str, Enum):
    CONTACT = "contact"
    COMPANY = "company"
    DEAL = "deal"
    ACTIVITY = "activity"

    __str__ = str.__str__


ObjectRelmCrmBatchApiOrStr: TypeAlias = Annotated[
    ObjectRelmCrmBatchApi | str, open_enum_validator(ObjectRelmCrmBatchApi)
]
