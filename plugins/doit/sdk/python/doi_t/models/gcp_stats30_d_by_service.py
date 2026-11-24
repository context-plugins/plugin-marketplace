from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.service_doi_t_perfect_scale_for_commitments_gcp_api import ServiceDoiTPerfectScaleForCommitmentsGcpApiOrStr
from .money import Money, MoneyDict


class GcpStats30DByService(SdkBaseModel):
    """Trailing 30-day aggregate metrics for one product line."""

    esr: OptionalNullable[float] = UNSET
    """Effective Savings Rate (ESR) over the last 30 days, as a fraction from 0 to 1 (for example, ``0.187`` is 18.7%).
    Measures what share of eligible spend is saved through active commitments compared with equivalent on-demand cost.
    Higher ESR means greater realized savings. Null when not yet available."""

    savings: Optional[Money] = UNSET
    """Total savings realized over the last 30 days from active commitments (USD)."""

    service: ServiceDoiTPerfectScaleForCommitmentsGcpApiOrStr
    """Product line these metrics belong to."""


class GcpStats30DByServiceDict(TypedDict):
    esr: NotRequired[float | None]
    savings: NotRequired[MoneyDict]
    service: ServiceDoiTPerfectScaleForCommitmentsGcpApiOrStr
