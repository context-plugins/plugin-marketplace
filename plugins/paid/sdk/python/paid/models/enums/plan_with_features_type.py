from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlanWithFeaturesType(str, Enum):
    """The type of plan (flat for fixed pricing, usage for usage-based, credit for prepaid credits)"""

    FLAT = "flat"
    USAGE = "usage"
    CREDIT = "credit"

    __str__ = str.__str__


PlanWithFeaturesTypeOrStr: TypeAlias = Annotated[PlanWithFeaturesType | str, open_enum_validator(PlanWithFeaturesType)]
