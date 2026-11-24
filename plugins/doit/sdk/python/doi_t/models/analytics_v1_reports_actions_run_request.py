from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .external_config import ExternalConfig, ExternalConfigDict


class AnalyticsV1ReportsActionsRunRequest(SdkBaseModel):
    config: Optional[ExternalConfig] = UNSET
    """Report configuration."""


class AnalyticsV1ReportsActionsRunRequestDict(TypedDict):
    config: NotRequired[ExternalConfigDict]
