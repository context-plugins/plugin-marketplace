from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RenewalStatus(str, Enum):
    """The renewal status of the certificate."""

    PENDING_AUTO_RENEWAL = "PENDING_AUTO_RENEWAL"
    PENDING_VALIDATION = "PENDING_VALIDATION"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

    __str__ = str.__str__


RenewalStatusOrStr: TypeAlias = Annotated[RenewalStatus | str, open_enum_validator(RenewalStatus)]
