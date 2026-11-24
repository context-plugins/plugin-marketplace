from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .verification_result1 import VerificationResult1, VerificationResult1Dict
from .verification_result4 import VerificationResult4, VerificationResult4Dict


class AccountInsightDataItem(SdkBaseModel):
    account_id: UUID = Field(alias="accountId")
    """The account identifier being verified"""

    account_number: Optional[VerificationResult4] = Field(default=UNSET, alias="accountNumber")
    """Account number verification result"""

    account_type: Optional[VerificationResult1] = Field(default=UNSET, alias="accountType")
    """Account type verification result"""


class AccountInsightDataItemDict(TypedDict):
    account_id: UUID
    account_number: NotRequired[VerificationResult4Dict]
    account_type: NotRequired[VerificationResult1Dict]
