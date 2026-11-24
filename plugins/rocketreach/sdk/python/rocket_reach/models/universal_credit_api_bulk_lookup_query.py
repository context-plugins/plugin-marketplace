from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .universal_credit_person_lookup_input import UniversalCreditPersonLookupInput, UniversalCreditPersonLookupInputDict


class UniversalCreditApiBulkLookupQuery(SdkBaseModel):
    queries: Optional[list[UniversalCreditPersonLookupInput]] = UNSET
    """Specify the lookup criteria for up to 100 people."""

    profile_list: str = "API Bulk Lookup"
    """Add specified contacts to this profile list."""

    webhook_id: Optional[int] = UNSET
    """ID of the webhook to post lookup results upon completion."""


class UniversalCreditApiBulkLookupQueryDict(TypedDict):
    queries: NotRequired[list[UniversalCreditPersonLookupInputDict]]
    profile_list: NotRequired[str]
    webhook_id: NotRequired[int]
