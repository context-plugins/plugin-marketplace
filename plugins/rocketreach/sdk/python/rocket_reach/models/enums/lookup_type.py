from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LookupType(str, Enum):
    STANDARD = "standard"
    PREMIUM = "premium"
    PREMIUM_FEEDS_DISABLED = "premium (feeds disabled)"
    BULK = "bulk"
    PHONE = "phone"
    ENRICH = "enrich"

    __str__ = str.__str__


LookupTypeOrStr: TypeAlias = Annotated[LookupType | str, open_enum_validator(LookupType)]
