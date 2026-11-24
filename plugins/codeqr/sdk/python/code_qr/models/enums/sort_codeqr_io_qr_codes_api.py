from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortCodeqrIoQrCodesApi(str, Enum):
    """The field to order the QR codes. The default is ``createdAt``, and the order of sorting is always descending."""

    CREATED_AT = "createdAt"
    SCANS = "scans"
    LAST_CLICKED = "lastClicked"

    __str__ = str.__str__


SortCodeqrIoQrCodesApiOrStr: TypeAlias = Annotated[
    SortCodeqrIoQrCodesApi | str, open_enum_validator(SortCodeqrIoQrCodesApi)
]
