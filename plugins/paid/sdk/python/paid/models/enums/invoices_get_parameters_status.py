from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoicesGetParametersStatus(str, Enum):
    BUILDING = "building"
    DRAFT = "draft"
    PENDING = "pending"
    POSTED = "posted"
    VOIDED = "voided"
    CANCELED = "canceled"
    ERROR = "error"

    __str__ = str.__str__


InvoicesGetParametersStatusOrStr: TypeAlias = Annotated[
    InvoicesGetParametersStatus | str, open_enum_validator(InvoicesGetParametersStatus)
]
