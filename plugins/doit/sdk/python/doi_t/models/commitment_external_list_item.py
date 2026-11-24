from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .commitment_period import CommitmentPeriod, CommitmentPeriodDict
from .enums.cloud_provider import CloudProviderOrStr


class CommitmentExternalListItem(SdkBaseModel):
    """Summary information of a commitment in a list."""

    id: Optional[str] = UNSET
    """The unique identifier of the commitment."""

    name: Optional[str] = UNSET
    """The name of the commitment."""

    start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    """The start date of the commitment."""

    end_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    """The end date of the commitment."""

    currency: Optional[str] = UNSET
    """The currency of the commitment."""

    cloud_provider: Optional[CloudProviderOrStr] = Field(default=UNSET, alias="cloudProvider")
    """The cloud provider associated with the commitment."""

    total_commitment_value: Optional[float] = Field(default=UNSET, alias="totalCommitmentValue")
    """The total value of the commitment across all periods."""

    total_current_attainment: Optional[float] = Field(default=UNSET, alias="totalCurrentAttainment")
    """The total attained spend across all periods, on a cash basis. This is eligible spend (including capped
    marketplace spend and credits) plus adjustments. Rollover between periods is excluded, so excess or shortfall
    carried into a later period is not counted again; each period's carried amount is reported separately in
    ``periods[].rolloverFromPrevPeriod``. Equals the sum of ``periods[].cashAttainment``."""

    total_marketplace_spend: Optional[float] = Field(default=UNSET, alias="totalMarketplaceSpend")
    """The total marketplace spend across all periods."""

    total_forecast_value: Optional[float] = Field(default=UNSET, alias="totalForecastValue")
    """The total projected spend at the end of the commitment, summed across all periods. 0 when insufficient history is
    available to compute a forecast."""

    periods: Optional[list[CommitmentPeriod]] = UNSET
    """The list of commitment periods."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The creation time in milliseconds since epoch."""

    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    """The last update time in milliseconds since epoch."""


class CommitmentExternalListItemDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    start_date: NotRequired[RFC3339DateTime]
    end_date: NotRequired[RFC3339DateTime]
    currency: NotRequired[str]
    cloud_provider: NotRequired[CloudProviderOrStr]
    total_commitment_value: NotRequired[float]
    total_current_attainment: NotRequired[float]
    total_marketplace_spend: NotRequired[float]
    total_forecast_value: NotRequired[float]
    periods: NotRequired[list[CommitmentPeriodDict]]
    create_time: NotRequired[int]
    update_time: NotRequired[int]
