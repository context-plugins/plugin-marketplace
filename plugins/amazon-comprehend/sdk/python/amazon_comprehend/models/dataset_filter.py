from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.dataset_type1 import DatasetType1OrStr
from .enums.status import StatusOrStr


class DatasetFilter(SdkBaseModel):
    status: Optional[StatusOrStr] = Field(default=UNSET, alias="Status")
    """Filter the datasets based on the dataset status."""

    dataset_type: Optional[DatasetType1OrStr] = Field(default=UNSET, alias="DatasetType")
    """Filter the datasets based on the dataset type."""

    creation_time_after: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimeAfter")
    """Filter the datasets to include datasets created after the specified time."""

    creation_time_before: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimeBefore")
    """Filter the datasets to include datasets created before the specified time."""


class DatasetFilterDict(TypedDict):
    status: NotRequired[StatusOrStr]
    dataset_type: NotRequired[DatasetType1OrStr]
    creation_time_after: NotRequired[RFC3339DateTime]
    creation_time_before: NotRequired[RFC3339DateTime]
