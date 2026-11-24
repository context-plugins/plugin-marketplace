from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .anomaly_sku import AnomalySku, AnomalySkuDict


class Facts(SdkBaseModel):
    """Deterministic facts about the anomaly, not AI-generated."""

    service_name: str = Field(alias="serviceName")
    """Service name"""

    platform: str
    """Cloud Provider name"""

    scope: str
    """Scope: Project or Account"""

    severity_level: str = Field(alias="severityLevel")
    """Severity level: ``information``, ``warning``, or ``critical``."""

    cost_of_anomaly: float = Field(alias="costOfAnomaly")
    """The difference between the actual cost and the maximum cost in the normal range."""

    actual_cost: OptionalNullable[float] = Field(default=UNSET, alias="actualCost")
    """Observed (actual) cost of the anomaly."""

    expected_max_cost: OptionalNullable[float] = Field(default=UNSET, alias="expectedMaxCost")
    """Maximum cost within the expected normal range."""

    top3_skus: list[AnomalySku] = Field(alias="top3SKUs")
    """Array of SKU entries contributing to an anomaly."""


class FactsDict(TypedDict):
    service_name: str
    platform: str
    scope: str
    severity_level: str
    cost_of_anomaly: float
    actual_cost: NotRequired[float | None]
    expected_max_cost: NotRequired[float | None]
    top3_skus: list[AnomalySkuDict]
