from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.field1 import Field1OrStr
from .more_hour import MoreHour, MoreHourDict
from .regular_hours import RegularHours, RegularHoursDict
from .special_hours import SpecialHours, SpecialHoursDict


class ApiV1MiscGoogleBusinessLocationHoursRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    validate_only: Optional[bool] = Field(default=UNSET, alias="validateOnly")
    fields: list[Field1OrStr]
    regular_hours: OptionalNullable[RegularHours] = Field(default=UNSET, alias="regularHours")
    special_hours: OptionalNullable[SpecialHours] = Field(default=UNSET, alias="specialHours")
    more_hours: OptionalNullable[list[MoreHour]] = Field(default=UNSET, alias="moreHours")


class ApiV1MiscGoogleBusinessLocationHoursRequestDict(TypedDict):
    team_id: str
    validate_only: NotRequired[bool]
    fields: list[Field1OrStr]
    regular_hours: NotRequired[RegularHoursDict | None]
    special_hours: NotRequired[SpecialHoursDict | None]
    more_hours: NotRequired[list[MoreHourDict] | None]
