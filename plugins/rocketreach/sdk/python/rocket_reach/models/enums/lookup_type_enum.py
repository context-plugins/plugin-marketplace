from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LookupTypeEnum(str, Enum):
    """* ``standard`` - standard
    * ``premium`` - premium
    * ``premium (feeds disabled)`` - premium (feeds disabled)
    * ``bulk`` - bulk
    * ``phone`` - phone
    * ``enrich`` - enrich"""

    STANDARD = "standard"
    PREMIUM = "premium"
    PREMIUM_FEEDS_DISABLED = "premium (feeds disabled)"
    BULK = "bulk"
    PHONE = "phone"
    ENRICH = "enrich"

    __str__ = str.__str__


LookupTypeEnumOrStr: TypeAlias = Annotated[LookupTypeEnum | str, open_enum_validator(LookupTypeEnum)]
