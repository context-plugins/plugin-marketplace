from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .grant_provenance import GrantProvenance, GrantProvenanceDict


class GrantTransaction(SdkBaseModel):
    """One grant line as filed. ``recip_ein`` is null where we would not stake an EIN on the name.

    ⚠️ ``recip_name`` IS THE REGISTERED NAME WHERE THE EIN RESOLVED, not the string on the filing. The projection is
    ``coalesce(registered_name, as_filed)``, so a resolved row shows what the IRS calls the organisation and an
    unresolved row shows what the filer typed. Reconciling a row back to its source filing therefore needs ``recip_ein``
    and the funder's return, not this field — an external audit read the difference as a substitution specific to one
    ``ein_source``, which is the shape it presents, though it applies to every resolved row."""

    funder_ein: str
    funder_name: Optional[str] = UNSET
    recip_ein: Optional[str] = UNSET
    recip_name: Optional[str] = UNSET
    recip_city: Optional[str] = UNSET
    recip_state: Optional[str] = UNSET
    recip_zip: Optional[str] = UNSET
    recip_country: Optional[str] = UNSET
    amount: Optional[int] = UNSET
    fiscal_year: Optional[int] = UNSET
    """Fiscal year of the FILING, not the payment date."""

    subject: Optional[str] = UNSET
    description: Optional[str] = UNSET
    x_plinth: Optional[GrantProvenance] = UNSET


class GrantTransactionDict(TypedDict):
    funder_ein: str
    funder_name: NotRequired[str]
    recip_ein: NotRequired[str]
    recip_name: NotRequired[str]
    recip_city: NotRequired[str]
    recip_state: NotRequired[str]
    recip_zip: NotRequired[str]
    recip_country: NotRequired[str]
    amount: NotRequired[int]
    fiscal_year: NotRequired[int]
    subject: NotRequired[str]
    description: NotRequired[str]
    x_plinth: NotRequired[GrantProvenanceDict]
