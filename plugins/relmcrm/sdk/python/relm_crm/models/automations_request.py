from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AutomationsRequest(SdkBaseModel):
    enabled: bool


class AutomationsRequestDict(TypedDict):
    enabled: bool
