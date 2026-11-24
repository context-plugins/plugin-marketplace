from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TierPlatformConnectorsApi(str, Enum):
    """Institution tier identifier 1 TierOne TierOne tier identifier for tier1 institution 2 TierTwo TierTwo tier
    identifier for tier2 institution 3 TierThree TierThree tier identifier for tier3 institution 4 TierFour TierFour
    tier identifier for tier4 institution"""

    _1 = "1"
    _2 = "2"
    _3 = "3"
    _4 = "4"

    __str__ = str.__str__


TierPlatformConnectorsApiOrStr: TypeAlias = Annotated[
    TierPlatformConnectorsApi | str, open_enum_validator(TierPlatformConnectorsApi)
]
