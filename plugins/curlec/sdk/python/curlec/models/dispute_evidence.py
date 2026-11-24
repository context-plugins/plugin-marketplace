from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class DisputeEvidence(SdkBaseModel):
    amount: Optional[int] = UNSET
    """Contested amount in currency subunits."""

    summary: Optional[str] = UNSET
    """Your explanation of why the dispute should be resolved in your favour. Max 1000 characters."""

    shipping_proof: Optional[list[str]] = UNSET
    """Document IDs proving product shipment."""

    billing_proof: Optional[list[str]] = UNSET
    """Order confirmation document IDs."""

    cancellation_proof: Optional[list[str]] = UNSET
    customer_communication: Optional[list[str]] = UNSET
    proof_of_service: Optional[list[str]] = UNSET
    explanation_letter: Optional[list[str]] = UNSET
    refund_confirmation: Optional[list[str]] = UNSET
    access_activity_log: Optional[list[str]] = UNSET
    refund_cancellation_policy: Optional[list[str]] = UNSET
    term_and_conditions: Optional[list[str]] = UNSET
    others: Optional[list[Any]] = UNSET
    submitted_at: OptionalNullable[int] = UNSET
    """Unix timestamp of last evidence submission. Null for drafts."""


class DisputeEvidenceDict(TypedDict):
    amount: NotRequired[int]
    summary: NotRequired[str]
    shipping_proof: NotRequired[list[str]]
    billing_proof: NotRequired[list[str]]
    cancellation_proof: NotRequired[list[str]]
    customer_communication: NotRequired[list[str]]
    proof_of_service: NotRequired[list[str]]
    explanation_letter: NotRequired[list[str]]
    refund_confirmation: NotRequired[list[str]]
    access_activity_log: NotRequired[list[str]]
    refund_cancellation_policy: NotRequired[list[str]]
    term_and_conditions: NotRequired[list[str]]
    others: NotRequired[list[Any]]
    submitted_at: NotRequired[int | None]
