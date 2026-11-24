from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .alert_threshold import AlertThreshold, AlertThresholdDict
from .enums.risk_status import RiskStatusOrStr
from .external_config_filter import ExternalConfigFilter, ExternalConfigFilterDict


class BudgetListItem(SdkBaseModel):
    """Summary information for a budget."""

    alert_thresholds: Optional[list[AlertThreshold]] = Field(default=UNSET, alias="alertThresholds")
    amount: Optional[float] = UNSET
    budget_name: Optional[str] = Field(default=UNSET, alias="budgetName")
    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    currency: Optional[str] = UNSET
    current_utilization: Optional[float] = Field(default=UNSET, alias="currentUtilization")
    end_period: Optional[int] = Field(default=UNSET, alias="endPeriod")
    forecasted_utilization_date: Optional[int] = Field(default=UNSET, alias="forecastedUtilizationDate")
    id: Optional[str] = UNSET
    owner: Optional[str] = UNSET
    risk_status: Optional[RiskStatusOrStr] = Field(default=UNSET, alias="riskStatus")
    """Server-computed risk classification, based on current utilization and forecasted breach date relative to the
    configured amount and current period end. "atRisk" - the budget has already exceeded its configured amount, or its
    forecast projects it will before the current period ends. "onTrack" - the budget has forecast data and is neither
    over budget nor projected to breach. "unknown" - no forecast data is available yet, the budget is a fixed budget
    whose period has already expired, or the budget is invalid/draft."""

    scopes: Optional[list[ExternalConfigFilter]] = UNSET
    """The filters selected define the scope of the budget."""

    start_period: Optional[int] = Field(default=UNSET, alias="startPeriod")
    time_interval: Optional[str] = Field(default=UNSET, alias="timeInterval")
    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    url: Optional[str] = UNSET


class BudgetListItemDict(TypedDict):
    alert_thresholds: NotRequired[list[AlertThresholdDict]]
    amount: NotRequired[float]
    budget_name: NotRequired[str]
    create_time: NotRequired[int]
    currency: NotRequired[str]
    current_utilization: NotRequired[float]
    end_period: NotRequired[int]
    forecasted_utilization_date: NotRequired[int]
    id: NotRequired[str]
    owner: NotRequired[str]
    risk_status: NotRequired[RiskStatusOrStr]
    scopes: NotRequired[list[ExternalConfigFilterDict]]
    start_period: NotRequired[int]
    time_interval: NotRequired[str]
    update_time: NotRequired[int]
    url: NotRequired[str]
