from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TracingConfiguration(SdkBaseModel):
    enabled: Optional[bool] = UNSET
    """When set to true, X-Ray tracing is enabled."""


class TracingConfigurationDict(TypedDict):
    enabled: NotRequired[bool]
