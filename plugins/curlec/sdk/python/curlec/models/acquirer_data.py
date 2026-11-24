from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AcquirerData(SdkBaseModel):
    rrn: Optional[str] = UNSET
    """Bank RRN (Retrieval Reference Number)."""

    authentication_reference_number: Optional[str] = UNSET
    bank_transaction_id: Optional[str] = UNSET
    transaction_id: Optional[str] = UNSET


class AcquirerDataDict(TypedDict):
    rrn: NotRequired[str]
    authentication_reference_number: NotRequired[str]
    bank_transaction_id: NotRequired[str]
    transaction_id: NotRequired[str]
