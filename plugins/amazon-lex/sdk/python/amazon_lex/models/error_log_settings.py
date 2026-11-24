from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorLogSettings(SdkBaseModel):
    enabled: bool
    """Settings parameters for the error logs, when it is enabled."""


class ErrorLogSettingsDict(TypedDict):
    enabled: bool
