from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.service2_doi_t_perfect_scale_for_commitments_gcp_api import (
    Service2DoiTPerfectScaleForCommitmentsGcpApiOrStr,
)
from .money import Money, MoneyDict


class GcpSavingsTotalsByService(SdkBaseModel):
    """Year-to-date and lifetime realized savings for one product line."""

    ytd: Money
    """Year-to-date realized savings."""

    lifetime: Money
    """Lifetime realized savings since onboarding."""

    service: Service2DoiTPerfectScaleForCommitmentsGcpApiOrStr
    """Product line these savings totals belong to."""


class GcpSavingsTotalsByServiceDict(TypedDict):
    ytd: MoneyDict
    lifetime: MoneyDict
    service: Service2DoiTPerfectScaleForCommitmentsGcpApiOrStr
