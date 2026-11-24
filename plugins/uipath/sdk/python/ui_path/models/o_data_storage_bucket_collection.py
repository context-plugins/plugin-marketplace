from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_ui_path_orchestrator_storage_buckets_api import (
    ValueUiPathOrchestratorStorageBucketsApi,
    ValueUiPathOrchestratorStorageBucketsApiDict,
)


class ODataStorageBucketCollection(SdkBaseModel):
    """OData collection response containing storage buckets"""

    value: Optional[list[ValueUiPathOrchestratorStorageBucketsApi]] = UNSET


class ODataStorageBucketCollectionDict(TypedDict):
    value: NotRequired[list[ValueUiPathOrchestratorStorageBucketsApiDict]]
