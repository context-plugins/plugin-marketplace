from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DialogCodeHookSettings(SdkBaseModel):
    enabled: bool
    """Enables the dialog code hook so that it processes user requests."""


class DialogCodeHookSettingsDict(TypedDict):
    enabled: bool
