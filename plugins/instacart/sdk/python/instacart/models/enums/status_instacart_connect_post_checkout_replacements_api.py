from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusInstacartConnectPostCheckoutReplacementsApi(str, Enum):
    """The customer's decision on the replacement. APPROVED accepts the replacement. REJECTED declines the replacement
    and triggers an automatic refund."""

    APPROVED = "APPROVED"
    REJECTED = "REJECTED"

    __str__ = str.__str__


StatusInstacartConnectPostCheckoutReplacementsApiOrStr: TypeAlias = Annotated[
    StatusInstacartConnectPostCheckoutReplacementsApi | str,
    open_enum_validator(StatusInstacartConnectPostCheckoutReplacementsApi),
]
