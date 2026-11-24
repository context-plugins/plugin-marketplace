from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WritableOrderLineType(str, Enum):
    """Defaults to STANDARD. Set to CREDIT for customer-authored, term-bound discount lines whose amounts contribute
    negatively to invoice aggregates."""

    STANDARD = "STANDARD"
    CREDIT = "CREDIT"

    __str__ = str.__str__


WritableOrderLineTypeOrStr: TypeAlias = Annotated[
    WritableOrderLineType | str, open_enum_validator(WritableOrderLineType)
]
