from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dispute_evidence import DisputeEvidence, DisputeEvidenceDict
from .enums.entity_razorpay_disputes_api import EntityRazorpayDisputesApiOrStr
from .enums.phase import PhaseOrStr
from .enums.status import StatusOrStr


class Dispute(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique dispute identifier. Prefix: disp_"""

    entity: Optional[EntityRazorpayDisputesApiOrStr] = UNSET
    payment_id: Optional[str] = UNSET
    """The payment against which the dispute was raised (pay_*)."""

    amount: Optional[int] = UNSET
    """Disputed amount in currency subunits."""

    currency: Optional[str] = UNSET
    amount_deducted: Optional[int] = UNSET
    """Amount deducted from your balance when dispute is lost."""

    reason_code: Optional[str] = UNSET
    """Code identifying the dispute reason."""

    reason_description: Optional[str] = UNSET
    """Human-readable explanation of the dispute cause."""

    respond_by: Optional[int] = UNSET
    """Unix timestamp by which you must respond. Missing this forfeits the dispute."""

    status: Optional[StatusOrStr] = UNSET
    """open: action required. under_review: evidence submitted, awaiting bank decision. won: resolved in your favour.
    lost: resolved against you. closed: resolved without chargeback."""

    phase: Optional[PhaseOrStr] = UNSET
    """Escalation stage of the dispute process."""

    created_at: Optional[int] = UNSET
    evidence: Optional[DisputeEvidence] = UNSET


class DisputeDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayDisputesApiOrStr]
    payment_id: NotRequired[str]
    amount: NotRequired[int]
    currency: NotRequired[str]
    amount_deducted: NotRequired[int]
    reason_code: NotRequired[str]
    reason_description: NotRequired[str]
    respond_by: NotRequired[int]
    status: NotRequired[StatusOrStr]
    phase: NotRequired[PhaseOrStr]
    created_at: NotRequired[int]
    evidence: NotRequired[DisputeEvidenceDict]
