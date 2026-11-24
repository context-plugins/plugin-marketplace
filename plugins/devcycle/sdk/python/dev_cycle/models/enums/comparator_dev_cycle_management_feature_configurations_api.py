from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ComparatorDevCycleManagementFeatureConfigurationsApi(str, Enum):
    """Comparator to use"""

    U003D = "="
    U0021U003D = "!="
    U003E = ">"
    U003EU003D = ">="
    U003C = "<"
    U003CU003D = "<="
    EXIST = "exist"
    EXIST2 = "!exist"

    __str__ = str.__str__


ComparatorDevCycleManagementFeatureConfigurationsApiOrStr: TypeAlias = Annotated[
    ComparatorDevCycleManagementFeatureConfigurationsApi | str,
    open_enum_validator(ComparatorDevCycleManagementFeatureConfigurationsApi),
]
