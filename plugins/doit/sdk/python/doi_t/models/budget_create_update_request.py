from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .budget_create_update_alert import BudgetCreateUpdateAlert, BudgetCreateUpdateAlertDict
from .collaborator import Collaborator, CollaboratorDict
from .enums.currency import CurrencyOrStr
from .enums.metric import Metric, MetricOrStr
from .enums.public1 import Public1OrStr
from .external_config_filter import ExternalConfigFilter, ExternalConfigFilterDict
from .slack_channel import SlackChannel, SlackChannelDict


class BudgetCreateUpdateRequest(SdkBaseModel):
    """Request body for creating or updating a budget."""

    alerts: Optional[list[BudgetCreateUpdateAlert]] = UNSET
    """List of up to three thresholds defined as a percentage of the amount."""

    amount: Optional[float] = UNSET
    """Budget period amount required: true(if usePrevSpend is false)"""

    seasonal_amounts: Optional[list[float]] = Field(default=UNSET, alias="seasonalAmounts")
    """List of seasonal amounts for recurring budgets with different amounts per period."""

    collaborators: Optional[list[Collaborator]] = UNSET
    """List of permitted users to view/edit the report."""

    currency: Optional[CurrencyOrStr] = UNSET
    """Currency code for monetary values."""

    description: str = ""
    """Budget description"""

    end_period: Optional[int] = Field(default=UNSET, alias="endPeriod")
    """Fixed budget end date required: true(if budget type is fixed)"""

    growth_per_period: float = Field(default=0.0, alias="growthPerPeriod")
    """Periodical growth percentage in recurring budget"""

    metric: MetricOrStr = Metric.COST
    """Budget metric"""

    name: Optional[str] = UNSET
    """Budget Name."""

    public: Optional[Public1OrStr] = UNSET
    recipients: Optional[list[str]] = UNSET
    """List of emails to notify when reaching alert threshold."""

    recipients_slack_channels: Optional[list[SlackChannel]] = Field(default=UNSET, alias="recipientsSlackChannels")
    """List of Slack channels to notify when reaching alert threshold."""

    scopes: Optional[list[ExternalConfigFilter]] = UNSET
    """The filters selected define the scope of the budget."""

    start_period: Optional[int] = Field(default=UNSET, alias="startPeriod")
    """Budget start Date"""

    time_interval: Optional[str] = Field(default=UNSET, alias="timeInterval")
    """Recurring budget interval can be one of: ["day", "week", "month", "quarter", "year"]"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """budget type can be one of: ["fixed", "recurring"]"""

    use_prev_spend: bool = Field(default=False, alias="usePrevSpend")
    """Use the last period's spend as the target amount for recurring budgets"""


class BudgetCreateUpdateRequestDict(TypedDict):
    alerts: NotRequired[list[BudgetCreateUpdateAlertDict]]
    amount: NotRequired[float]
    seasonal_amounts: NotRequired[list[float]]
    collaborators: NotRequired[list[CollaboratorDict]]
    currency: NotRequired[CurrencyOrStr]
    description: NotRequired[str]
    end_period: NotRequired[int]
    growth_per_period: NotRequired[float]
    metric: NotRequired[MetricOrStr]
    name: NotRequired[str]
    public: NotRequired[Public1OrStr]
    recipients: NotRequired[list[str]]
    recipients_slack_channels: NotRequired[list[SlackChannelDict]]
    scopes: NotRequired[list[ExternalConfigFilterDict]]
    start_period: NotRequired[int]
    time_interval: NotRequired[str]
    type_: NotRequired[str]
    use_prev_spend: NotRequired[bool]
