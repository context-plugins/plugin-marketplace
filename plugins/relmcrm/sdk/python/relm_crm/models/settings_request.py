from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SettingsRequest(SdkBaseModel):
    overage_cap_usd: float | None
    """USD cap on metered overage; 0 = never any overage, null = unlimited."""


class SettingsRequestDict(TypedDict):
    overage_cap_usd: float | None
