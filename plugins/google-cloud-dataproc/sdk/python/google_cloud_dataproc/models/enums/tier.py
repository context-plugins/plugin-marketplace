from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Tier(str, Enum):
    """Optional. The tier of the service."""

    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    DEVELOPER = "DEVELOPER"
    ENTERPRISE = "ENTERPRISE"

    __str__ = str.__str__


TierOrStr: TypeAlias = Annotated[Tier | str, open_enum_validator(Tier)]
