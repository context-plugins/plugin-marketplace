from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RenewalEligibility(str, Enum):
    """Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can
    be renewed with the RenewCertificate command."""

    ELIGIBLE = "ELIGIBLE"
    INELIGIBLE = "INELIGIBLE"

    __str__ = str.__str__


RenewalEligibilityOrStr: TypeAlias = Annotated[RenewalEligibility | str, open_enum_validator(RenewalEligibility)]
