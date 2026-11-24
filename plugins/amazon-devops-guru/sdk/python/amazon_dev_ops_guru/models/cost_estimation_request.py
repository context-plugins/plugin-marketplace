from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cost_estimation_resource_collection_filter import (
    CostEstimationResourceCollectionFilter,
    CostEstimationResourceCollectionFilterDict,
)


class CostEstimationRequest(SdkBaseModel):
    resource_collection: CostEstimationResourceCollectionFilter = Field(alias="ResourceCollection")
    client_token: Optional[str] = Field(default=UNSET, alias="ClientToken")
    """The idempotency token used to identify each cost estimate request."""


class CostEstimationRequestDict(TypedDict):
    resource_collection: CostEstimationResourceCollectionFilterDict
    client_token: NotRequired[str]
