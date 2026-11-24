from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.status1 import Status1OrStr
from .evidence import Evidence, EvidenceDict


class Affiliation(SdkBaseModel):
    """Claims only: does the address's domain match the claimed business (same domain, a registry domain of the
    business, or a link between the two websites)? A mismatch means manual review, never rejection."""

    status: Optional[Status1OrStr] = UNSET
    email_domain: OptionalNullable[str] = UNSET
    claimed_domain: OptionalNullable[str] = UNSET
    evidence: Optional[list[Evidence]] = UNSET


class AffiliationDict(TypedDict):
    status: NotRequired[Status1OrStr]
    email_domain: NotRequired[str | None]
    claimed_domain: NotRequired[str | None]
    evidence: NotRequired[list[EvidenceDict]]
