from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FunderType(str, Enum):
    PRIVATE_FOUNDATION = "private_foundation"
    PUBLIC_CHARITY = "public_charity"
    DAF_OR_PASSTHROUGH = "daf_or_passthrough"

    __str__ = str.__str__


FunderTypeOrStr: TypeAlias = Annotated[FunderType | str, open_enum_validator(FunderType)]
