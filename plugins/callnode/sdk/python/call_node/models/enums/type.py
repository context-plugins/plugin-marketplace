from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Always TXT: the DKIM key, the SPF entry and the DMARC policy, the three records verification checks. No MX or
    CNAME is issued (receiving and tracking are off)."""

    TXT = "TXT"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
