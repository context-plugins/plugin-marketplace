from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.level import LevelOrStr


class CompassIncidentEventSeverityInputDto(SdkBaseModel):
    """The severity of an incident"""

    label: OptionalNullable[str] = UNSET
    """The label to use for displaying the severity of the incident"""

    level: OptionalNullable[LevelOrStr] = UNSET
    """The severity level. A severity level of 'ONE' is the most severe, and a level of 'FIVE' is the least severe."""


class CompassIncidentEventSeverityInputDtoDict(TypedDict):
    label: NotRequired[str | None]
    level: NotRequired[LevelOrStr | None]
