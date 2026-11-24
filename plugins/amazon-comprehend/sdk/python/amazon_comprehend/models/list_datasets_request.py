from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_filter import DatasetFilter, DatasetFilterDict


class ListDatasetsRequest(SdkBaseModel):
    flywheel_arn: Optional[str] = Field(default=UNSET, alias="FlywheelArn")
    """The Amazon Resource Number (ARN) of the flywheel."""

    filter: Optional[DatasetFilter] = Field(default=UNSET, alias="Filter")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of results to return in a response. The default is 100."""


class ListDatasetsRequestDict(TypedDict):
    flywheel_arn: NotRequired[str]
    filter: NotRequired[DatasetFilterDict]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
