from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomDocumentModel(int, Enum):
    """1 = SwitchProductItemSellToBuy"""

    VALUE_1 = 1

    __str__ = str.__str__


CustomDocumentModelOrInt: TypeAlias = Annotated[CustomDocumentModel | int, open_enum_validator(CustomDocumentModel)]
