from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .verification_result import VerificationResult, VerificationResultDict
from .verification_result2 import VerificationResult2, VerificationResult2Dict


class IdentityInsightDataItem(SdkBaseModel):
    name: Optional[VerificationResult2] = UNSET
    """Name verification result"""

    phones: Optional[list[VerificationResult]] = UNSET
    """Array of phone number verification results"""

    emails: Optional[list[VerificationResult]] = UNSET
    """Array of email verification results"""

    addresses: Optional[list[VerificationResult]] = UNSET
    """Array of address verification results"""


class IdentityInsightDataItemDict(TypedDict):
    name: NotRequired[VerificationResult2Dict]
    phones: NotRequired[list[VerificationResultDict]]
    emails: NotRequired[list[VerificationResultDict]]
    addresses: NotRequired[list[VerificationResultDict]]
