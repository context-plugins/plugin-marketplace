from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ForkPolicy(str, Enum):
    """Controls the rules for forking this repository.

    * **allow_forks**: unrestricted forking
    * **no_public_forks**: restrict forking to private forks (forks cannot
      be made public later)
    * **no_forks**: deny all forking"""

    ALLOW_FORKS = "allow_forks"
    NO_PUBLIC_FORKS = "no_public_forks"
    NO_FORKS = "no_forks"

    __str__ = str.__str__


ForkPolicyOrStr: TypeAlias = Annotated[ForkPolicy | str, open_enum_validator(ForkPolicy)]
