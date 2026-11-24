from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ForkingMode(str, Enum):
    """Controls the rules for forking repositories within this workspace.

    * **allow_forks**: unrestricted forking
    * **internal_only**: prevents forking of private repositories outside the workspace or to public repositories"""

    ALLOW_FORKS = "allow_forks"
    INTERNAL_ONLY = "internal_only"

    __str__ = str.__str__


ForkingModeOrStr: TypeAlias = Annotated[ForkingMode | str, open_enum_validator(ForkingMode)]
