from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ThreeDsActionType(str, Enum):
    """Enum representing the action type for 3D Secure (3DS) transactions."""

    ACCEPT = "ACCEPT"
    REJECT = "REJECT"

    __str__ = str.__str__


ThreeDsActionTypeOrStr: TypeAlias = Annotated[ThreeDsActionType | str, open_enum_validator(ThreeDsActionType)]
