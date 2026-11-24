from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RetentionLockType(str, Enum):
    """Tape retention lock can be configured in two modes. When configured in governance mode, Amazon Web Services
    accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes.
    When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon
    Web Services account."""

    COMPLIANCE = "COMPLIANCE"
    GOVERNANCE = "GOVERNANCE"
    NONE = "NONE"

    __str__ = str.__str__


RetentionLockTypeOrStr: TypeAlias = Annotated[RetentionLockType | str, open_enum_validator(RetentionLockType)]
