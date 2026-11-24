from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReportSkipReason(str, Enum):
    """Why report is null: nonpersist (team keeps no data), disabled (AI detector history off), text_not_retained
    (history keeps no text), unconfirmed_email, quota (history full), unscorable, error."""

    NONPERSIST = "nonpersist"
    DISABLED = "disabled"
    TEXT_NOT_RETAINED = "text_not_retained"
    UNCONFIRMED_EMAIL = "unconfirmed_email"
    QUOTA = "quota"
    UNSCORABLE = "unscorable"
    ERROR = "error"

    __str__ = str.__str__


ReportSkipReasonOrStr: TypeAlias = Annotated[ReportSkipReason | str, open_enum_validator(ReportSkipReason)]
