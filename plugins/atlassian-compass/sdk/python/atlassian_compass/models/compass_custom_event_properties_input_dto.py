from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.icon import IconOrStr


class CompassCustomEventPropertiesInputDto(SdkBaseModel):
    """The list of properties of the custom event."""

    id: str
    """The ID of the custom event."""

    icon: IconOrStr
    """The icon for the custom event."""


class CompassCustomEventPropertiesInputDtoDict(TypedDict):
    id: str
    icon: IconOrStr
