from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RenewalStatus2(str, Enum):
    """The status of ACM's managed renewal of the certificate."""

    PENDING_AUTO_RENEWAL = "PENDING_AUTO_RENEWAL"
    PENDING_VALIDATION = "PENDING_VALIDATION"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

    __str__ = str.__str__


RenewalStatus2OrStr: TypeAlias = Annotated[RenewalStatus2 | str, open_enum_validator(RenewalStatus2)]
