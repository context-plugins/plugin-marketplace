from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApplicationsEnvironmentsSettingsAppInsightsKeyRequest(SdkBaseModel):
    key: Optional[str] = UNSET
    """The Application Insights instrumentation key"""


class ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict(TypedDict):
    key: NotRequired[str]
