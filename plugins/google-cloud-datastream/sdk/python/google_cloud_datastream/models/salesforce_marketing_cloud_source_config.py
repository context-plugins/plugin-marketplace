from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_catalog1 import SourceCatalog1, SourceCatalog1Dict
from .source_catalog5 import SourceCatalog5, SourceCatalog5Dict


class SalesforceMarketingCloudSourceConfig(SdkBaseModel):
    """Configuration for syncing data from a Salesforce Marketing Cloud source."""

    exclude_objects: Optional[SourceCatalog1] = Field(default=UNSET, alias="excludeObjects")
    """Optional. The objects to exclude from the stream."""

    full_refresh_polling_interval: Optional[str] = Field(default=UNSET, alias="fullRefreshPollingInterval")
    """Required. Specifies the polling interval for a full refresh of objects that do not support incremental sync. If
    not set, a default value of 24 hours is used. The duration must be between 1 and 24 hours, inclusive."""

    polling_interval: Optional[str] = Field(default=UNSET, alias="pollingInterval")
    """Required. Incremental sync polling interval for all objects. If not set, a default value of ``5 minutes`` is
    used. The duration must be from ``5 minutes`` to ``24 hours``, inclusive."""

    include_objects: Optional[SourceCatalog5] = Field(default=UNSET, alias="includeObjects")
    """Optional. The objects to retrieve from the source."""


class SalesforceMarketingCloudSourceConfigDict(TypedDict):
    exclude_objects: NotRequired[SourceCatalog1Dict]
    full_refresh_polling_interval: NotRequired[str]
    polling_interval: NotRequired[str]
    include_objects: NotRequired[SourceCatalog5Dict]
