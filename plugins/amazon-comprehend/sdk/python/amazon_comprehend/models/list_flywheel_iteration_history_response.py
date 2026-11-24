from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .flywheel_iteration_properties import FlywheelIterationProperties, FlywheelIterationPropertiesDict


class ListFlywheelIterationHistoryResponse(SdkBaseModel):
    flywheel_iteration_properties_list: Optional[list[FlywheelIterationProperties]] = Field(
        default=UNSET, alias="FlywheelIterationPropertiesList"
    )
    """List of flywheel iteration properties"""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Next token"""


class ListFlywheelIterationHistoryResponseDict(TypedDict):
    flywheel_iteration_properties_list: NotRequired[list[FlywheelIterationPropertiesDict]]
    next_token: NotRequired[str]
