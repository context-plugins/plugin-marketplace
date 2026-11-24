from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """invoice: a formal invoice document. link: a payment page / payment link."""

    INVOICE = "invoice"
    LINK = "link"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
