from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .collaborator import Collaborator, CollaboratorDict
from .enums.currency import CurrencyOrStr
from .enums.public import PublicOrStr
from .external_budget_alert import ExternalBudgetAlert, ExternalBudgetAlertDict
from .external_config_filter import ExternalConfigFilter, ExternalConfigFilterDict
from .slack_channel import SlackChannel, SlackChannelDict


class BudgetApi(SdkBaseModel):
    """Budget details and runtime metrics."""

    alerts: Optional[list[ExternalBudgetAlert]] = UNSET
    """List of up to three thresholds defined as a percentage of amount."""

    amount: Optional[float] = UNSET
    """Budget period amount required: true(if usePrevSpend is false)"""

    seasonal_amounts: Optional[list[float]] = Field(default=UNSET, alias="seasonalAmounts")
    """List of seasonal amounts for recurring budgets with different amounts per period."""

    collaborators: Optional[list[Collaborator]] = UNSET
    """List of permitted users to view/edit the report."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """Creation time (in UNIX timestamp)."""

    currency: CurrencyOrStr
    """Currency code for monetary values."""

    current_utilization: Optional[float] = Field(default=UNSET, alias="currentUtilization")
    description: Optional[str] = UNSET
    """Budget description."""

    end_period: Optional[int] = Field(default=UNSET, alias="endPeriod")
    """Fixed budget end date (in UNIX timestamp) required: true(if budget type is fixed)"""

    forecasted_utilization: Optional[float] = Field(default=UNSET, alias="forecastedUtilization")
    growth_per_period: float = Field(default=0.0, alias="growthPerPeriod")
    """Periodical growth percentage in recurring budgets."""

    id: Optional[str] = UNSET
    """budget ID, identifying the report in:path"""

    metric: str = "cost"
    """Budget metric - currently fixed to "cost"
    """

    name: str
    """Budget Name"""

    public: Optional[PublicOrStr] = UNSET
    """Public sharing access level for the budget."""

    recipients: Optional[list[str]] = UNSET
    """List of emails to notify when reaching alert threshold."""

    recipients_slack_channels: Optional[list[SlackChannel]] = Field(default=UNSET, alias="recipientsSlackChannels")
    """List of Slack channels to notify when reaching alert threshold."""

    scopes: list[ExternalConfigFilter]
    """The filters selected define the scope of the budget."""

    start_period: int = Field(alias="startPeriod")
    """Budget start date (in UNIX timestamp)."""

    time_interval: str = Field(alias="timeInterval")
    """Recurring budget interval can be one of: ["day", "week", "month", "quarter" ,"year"]"""

    type_: str = Field(alias="type")
    """budget type can be one of: ["fixed", "recurring"]"""

    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    """Update time (in UNIX timestamp)."""

    use_prev_spend: bool = Field(default=False, alias="usePrevSpend")
    """Use the last period's spend as the target amount for recurring budgets."""


class BudgetApiDict(TypedDict):
    alerts: NotRequired[list[ExternalBudgetAlertDict]]
    amount: NotRequired[float]
    seasonal_amounts: NotRequired[list[float]]
    collaborators: NotRequired[list[CollaboratorDict]]
    create_time: NotRequired[int]
    currency: CurrencyOrStr
    current_utilization: NotRequired[float]
    description: NotRequired[str]
    end_period: NotRequired[int]
    forecasted_utilization: NotRequired[float]
    growth_per_period: NotRequired[float]
    id: NotRequired[str]
    metric: NotRequired[str]
    name: str
    public: NotRequired[PublicOrStr]
    recipients: NotRequired[list[str]]
    recipients_slack_channels: NotRequired[list[SlackChannelDict]]
    scopes: list[ExternalConfigFilterDict]
    start_period: int
    time_interval: str
    type_: str
    update_time: NotRequired[int]
    use_prev_spend: NotRequired[bool]
