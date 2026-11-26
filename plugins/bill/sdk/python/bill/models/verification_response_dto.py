from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.verification_decision_type import VerificationDecisionTypeOrStr
from .enums.verification_processing_status import VerificationProcessingStatusOrStr


class VerificationResponseDto(SdkBaseModel):
    """Risk verification response."""

    processing_status: Optional[VerificationProcessingStatusOrStr] = Field(default=UNSET, alias="processingStatus")
    decision: Optional[VerificationDecisionTypeOrStr] = UNSET
    reference_id: Optional[str] = Field(default=UNSET, alias="referenceId")
    """BILL-generated ID to uniquely identify the risk verification request for the organization"""


class VerificationResponseDtoDict(TypedDict):
    processing_status: NotRequired[VerificationProcessingStatusOrStr]
    decision: NotRequired[VerificationDecisionTypeOrStr]
    reference_id: NotRequired[str]
