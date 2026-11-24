from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .colors import Colors, ColorsDict
from .enums.powered_by_alignment import PoweredByAlignmentOrStr


class Settings(SdkBaseModel):
    project: Optional[str] = Field(default=UNSET, alias="_project")
    """Project ID"""

    enabled: Optional[bool] = UNSET
    """Whether opt-in is enabled for this project"""

    title: Optional[str] = UNSET
    """Title for the opt-in UI"""

    description: Optional[str] = UNSET
    """Description for the opt-in UI"""

    image_url: Optional[str] = Field(default=UNSET, alias="imageURL")
    """Image URL for the opt-in UI"""

    colors: Optional[Colors] = UNSET
    powered_by_alignment: Optional[PoweredByAlignmentOrStr] = Field(default=UNSET, alias="poweredByAlignment")
    """Alignment for "powered by" text"""


class SettingsDict(TypedDict):
    project: NotRequired[str]
    enabled: NotRequired[bool]
    title: NotRequired[str]
    description: NotRequired[str]
    image_url: NotRequired[str]
    colors: NotRequired[ColorsDict]
    powered_by_alignment: NotRequired[PoweredByAlignmentOrStr]
