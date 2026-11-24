from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .released_staleness_settings import ReleasedStalenessSettings, ReleasedStalenessSettingsDict
from .staleness_email_settings import StalenessEmailSettings, StalenessEmailSettingsDict
from .unmodified_long_staleness_settings import UnmodifiedLongStalenessSettings, UnmodifiedLongStalenessSettingsDict
from .unmodified_short_staleness_settings import UnmodifiedShortStalenessSettings, UnmodifiedShortStalenessSettingsDict
from .unused_staleness_settings import UnusedStalenessSettings, UnusedStalenessSettingsDict


class StalenessSettings(SdkBaseModel):
    enabled: bool
    released: ReleasedStalenessSettings
    unmodified_long: UnmodifiedLongStalenessSettings = Field(alias="unmodifiedLong")
    unmodified_short: UnmodifiedShortStalenessSettings = Field(alias="unmodifiedShort")
    unused: UnusedStalenessSettings
    email: StalenessEmailSettings


class StalenessSettingsDict(TypedDict):
    enabled: bool
    released: ReleasedStalenessSettingsDict
    unmodified_long: UnmodifiedLongStalenessSettingsDict
    unmodified_short: UnmodifiedShortStalenessSettingsDict
    unused: UnusedStalenessSettingsDict
    email: StalenessEmailSettingsDict
