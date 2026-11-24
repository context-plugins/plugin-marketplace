from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .source_catalog1 import SourceCatalog1, SourceCatalog1Dict
from .source_catalog5 import SourceCatalog5, SourceCatalog5Dict


class DataverseSourceConfig1(SdkBaseModel):
    """Dataverse data source configuration."""

    polling_interval: Optional[str] = Field(default=UNSET, alias="pollingInterval")
    """Required. Incremental sync polling interval for all objects. If not set, a default value of ``5 minutes`` is
    used. The duration must be from ``5 minutes`` to ``24 hours``, inclusive."""

    include_objects: Optional[SourceCatalog5] = Field(default=UNSET, alias="includeObjects")
    """Optional. The objects to retrieve from the source."""

    exclude_objects: Optional[SourceCatalog1] = Field(default=UNSET, alias="excludeObjects")
    """Optional. The objects to exclude from the stream."""


class DataverseSourceConfig1Dict(TypedDict):
    polling_interval: NotRequired[str]
    include_objects: NotRequired[SourceCatalog5Dict]
    exclude_objects: NotRequired[SourceCatalog1Dict]
