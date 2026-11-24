from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConfigModel(SdkBaseModel):
    localization_enabled: Optional[bool] = Field(default=UNSET, alias="localizationEnabled")
    """When true, the Decision Engine uses each variant's localeValues to select locale-appropriate content at runtime.
    When false or omitted, only the default variant value is used, even if localeValues are present."""

    max_sends_per_user_window_days: Optional[float] = Field(default=UNSET, alias="maxSendsPerUserWindowDays")
    """Rolling window in days for the maxSendsPerUser limit"""

    max_sends_per_user: Optional[float] = Field(default=UNSET, alias="maxSendsPerUser")
    """Maximum number of times this variable's variants can be sent to a single user"""


class ConfigModelDict(TypedDict):
    localization_enabled: NotRequired[bool]
    max_sends_per_user_window_days: NotRequired[float]
    max_sends_per_user: NotRequired[float]
