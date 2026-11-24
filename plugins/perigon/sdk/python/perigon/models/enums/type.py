from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Delivery channel type. API-managed contact points use WEBHOOK."""

    EMAIL = "EMAIL"
    FASTN = "FASTN"
    WEBHOOK = "WEBHOOK"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
