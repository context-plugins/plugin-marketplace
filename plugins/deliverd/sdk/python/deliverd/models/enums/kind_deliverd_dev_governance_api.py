from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindDeliverdDevGovernanceApi(str, Enum):
    """initial, intermediate, final, or reclassification (as non-major)"""

    INITIAL = "initial"
    INTERMEDIATE = "intermediate"
    FINAL = "final"
    RECLASSIFICATION = "reclassification"

    __str__ = str.__str__


KindDeliverdDevGovernanceApiOrStr: TypeAlias = Annotated[
    KindDeliverdDevGovernanceApi | str, open_enum_validator(KindDeliverdDevGovernanceApi)
]
