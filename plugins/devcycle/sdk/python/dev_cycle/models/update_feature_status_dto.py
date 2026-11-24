from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status4 import Status4OrStr


class UpdateFeatureStatusDto(SdkBaseModel):
    status: Optional[Status4OrStr] = UNSET
    """The status to set the Feature's status to"""

    custom_status: Optional[str] = Field(default=UNSET, alias="_customStatus")
    """The ID of the custom status to set the Feature's status to"""

    static_variation: Optional[str] = Field(default=UNSET, alias="staticVariation")
    """The variation key or ID to serve if the status is set to complete"""


class UpdateFeatureStatusDtoDict(TypedDict):
    status: NotRequired[Status4OrStr]
    custom_status: NotRequired[str]
    static_variation: NotRequired[str]
