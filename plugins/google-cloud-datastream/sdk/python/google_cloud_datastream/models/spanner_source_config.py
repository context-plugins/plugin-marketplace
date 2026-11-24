from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.spanner_rpc_priority import SpannerRpcPriorityOrStr
from .spanner_database3 import SpannerDatabase3, SpannerDatabase3Dict
from .spanner_database4 import SpannerDatabase4, SpannerDatabase4Dict


class SpannerSourceConfig(SdkBaseModel):
    """Configuration for syncing data from a Spanner source."""

    fgac_role: Optional[str] = Field(default=UNSET, alias="fgacRole")
    """Optional. The FGAC role to use for the stream."""

    include_objects: Optional[SpannerDatabase3] = Field(default=UNSET, alias="includeObjects")
    """Optional. The Spanner objects to retrieve from the data source. If some objects are both included and excluded,
    an error will be thrown."""

    max_concurrent_cdc_tasks: Optional[int] = Field(default=UNSET, alias="maxConcurrentCdcTasks")
    """Optional. Maximum number of concurrent CDC tasks."""

    spanner_rpc_priority: Optional[SpannerRpcPriorityOrStr] = Field(default=UNSET, alias="spannerRpcPriority")
    """Optional. The RPC priority to use for the stream."""

    backfill_data_boost_enabled: Optional[bool] = Field(default=UNSET, alias="backfillDataBoostEnabled")
    """Optional. Whether to use Data Boost for Spanner backfills. Defaults to false if not set."""

    change_stream_name: Optional[str] = Field(default=UNSET, alias="changeStreamName")
    """Required. Immutable. The change stream name to use for the stream."""

    max_concurrent_backfill_tasks: Optional[int] = Field(default=UNSET, alias="maxConcurrentBackfillTasks")
    """Optional. Maximum number of concurrent backfill tasks."""

    exclude_objects: Optional[SpannerDatabase4] = Field(default=UNSET, alias="excludeObjects")
    """Optional. The Spanner objects to avoid retrieving. If some objects are both included and excluded, an error will
    be thrown."""


class SpannerSourceConfigDict(TypedDict):
    fgac_role: NotRequired[str]
    include_objects: NotRequired[SpannerDatabase3Dict]
    max_concurrent_cdc_tasks: NotRequired[int]
    spanner_rpc_priority: NotRequired[SpannerRpcPriorityOrStr]
    backfill_data_boost_enabled: NotRequired[bool]
    change_stream_name: NotRequired[str]
    max_concurrent_backfill_tasks: NotRequired[int]
    exclude_objects: NotRequired[SpannerDatabase4Dict]
