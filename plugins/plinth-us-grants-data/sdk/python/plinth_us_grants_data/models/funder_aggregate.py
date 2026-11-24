from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FunderAggregate(SdkBaseModel):
    funder_ein: str
    funder_name: Optional[str] = UNSET
    funder_state: Optional[str] = UNSET
    total_amount: Optional[int] = UNSET
    grant_count: Optional[int] = UNSET
    recipient_count: Optional[int] = UNSET
    """Distinct recipients we can identify as organizations. Grant lines whose recipient is a placeholder ('various
    individuals', 'see attached') or an individual-assistance program's beneficiary do not count toward this, so it is
    not the count of distinct recipient_raw strings — for funders that give to individuals the two differ by orders of
    magnitude. CHANGED 2026-08: this previously counted distinct raw strings, and reads taken before that are not
    comparable. The excluded money is reported in x_plinth.unidentified."""

    first_fiscal_year: Optional[int] = UNSET
    last_fiscal_year: Optional[int] = UNSET


class FunderAggregateDict(TypedDict):
    funder_ein: str
    funder_name: NotRequired[str]
    funder_state: NotRequired[str]
    total_amount: NotRequired[int]
    grant_count: NotRequired[int]
    recipient_count: NotRequired[int]
    first_fiscal_year: NotRequired[int]
    last_fiscal_year: NotRequired[int]
