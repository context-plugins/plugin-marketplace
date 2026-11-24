from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .email_settings_dto import EmailSettingsDto, EmailSettingsDtoDict
from .released_staleness_dto import ReleasedStalenessDto, ReleasedStalenessDtoDict
from .unmodified_long_staleness_dto import UnmodifiedLongStalenessDto, UnmodifiedLongStalenessDtoDict
from .unmodified_short_staleness_dto import UnmodifiedShortStalenessDto, UnmodifiedShortStalenessDtoDict
from .unused_staleness_dto import UnusedStalenessDto, UnusedStalenessDtoDict


class StalenessSettingsDto(SdkBaseModel):
    enabled: bool
    released: ReleasedStalenessDto
    unmodified_long: UnmodifiedLongStalenessDto = Field(alias="unmodifiedLong")
    unmodified_short: UnmodifiedShortStalenessDto = Field(alias="unmodifiedShort")
    unused: UnusedStalenessDto
    email: EmailSettingsDto


class StalenessSettingsDtoDict(TypedDict):
    enabled: bool
    released: ReleasedStalenessDtoDict
    unmodified_long: UnmodifiedLongStalenessDtoDict
    unmodified_short: UnmodifiedShortStalenessDtoDict
    unused: UnusedStalenessDtoDict
    email: EmailSettingsDtoDict
