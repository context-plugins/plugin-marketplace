from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Field type. 'date' is always auto-filled at signing time, never editable by the signer."""

    SIGNATURE = "signature"
    TEXT = "text"
    DATE = "date"
    CHECKBOX = "checkbox"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
