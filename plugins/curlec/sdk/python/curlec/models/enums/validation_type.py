from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValidationType(str, Enum):
    """penniless = reverse penny drop (UPI intent); optimized = system chooses best method"""

    PENNYDROP = "pennydrop"
    PENNILESS = "penniless"
    OPTIMIZED = "optimized"

    __str__ = str.__str__


ValidationTypeOrStr: TypeAlias = Annotated[ValidationType | str, open_enum_validator(ValidationType)]
