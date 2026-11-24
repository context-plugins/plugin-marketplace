from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Settings(SdkBaseModel):
    overage_cap_usd: OptionalNullable[float] = UNSET


class SettingsDict(TypedDict):
    overage_cap_usd: NotRequired[float | None]
