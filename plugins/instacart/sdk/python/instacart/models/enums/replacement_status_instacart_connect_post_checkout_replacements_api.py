from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReplacementStatusInstacartConnectPostCheckoutReplacementsApi(str, Enum):
    """The updated replacement status."""

    APPROVED = "APPROVED"
    REJECTED = "REJECTED"

    __str__ = str.__str__


ReplacementStatusInstacartConnectPostCheckoutReplacementsApiOrStr: TypeAlias = Annotated[
    ReplacementStatusInstacartConnectPostCheckoutReplacementsApi | str,
    open_enum_validator(ReplacementStatusInstacartConnectPostCheckoutReplacementsApi),
]
