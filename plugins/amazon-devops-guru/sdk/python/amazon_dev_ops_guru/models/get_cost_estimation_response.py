from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cost_estimation_resource_collection_filter import (
    CostEstimationResourceCollectionFilter,
    CostEstimationResourceCollectionFilterDict,
)
from .cost_estimation_time_range import CostEstimationTimeRange, CostEstimationTimeRangeDict
from .enums.status_amazon_dev_ops_guru_cost_estimation_api import StatusAmazonDevOpsGuruCostEstimationApiOrStr
from .service_resource_cost import ServiceResourceCost, ServiceResourceCostDict


class GetCostEstimationResponse(SdkBaseModel):
    resource_collection: Optional[CostEstimationResourceCollectionFilter] = Field(
        default=UNSET, alias="ResourceCollection"
    )
    status: Optional[StatusAmazonDevOpsGuruCostEstimationApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of creating this cost estimate. If it's still in progress, the status ONGOING is returned. If it is
    finished, the status COMPLETED is returned."""

    costs: Optional[list[ServiceResourceCost]] = Field(default=UNSET, alias="Costs")
    """An array of ResourceCost objects that each contains details about the monthly cost estimate to analyze one of
    your Amazon Web Services resources."""

    time_range: Optional[CostEstimationTimeRange] = Field(default=UNSET, alias="TimeRange")
    total_cost: Optional[float] = Field(default=UNSET, alias="TotalCost")
    """The estimated monthly cost to analyze the Amazon Web Services resources. This value is the sum of the estimated
    costs to analyze each resource in the Costs object in this response."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class GetCostEstimationResponseDict(TypedDict):
    resource_collection: NotRequired[CostEstimationResourceCollectionFilterDict]
    status: NotRequired[StatusAmazonDevOpsGuruCostEstimationApiOrStr]
    costs: NotRequired[list[ServiceResourceCostDict]]
    time_range: NotRequired[CostEstimationTimeRangeDict]
    total_cost: NotRequired[float]
    next_token: NotRequired[str]
