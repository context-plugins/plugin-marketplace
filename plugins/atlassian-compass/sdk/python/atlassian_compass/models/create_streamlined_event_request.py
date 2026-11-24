from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .compass_event_input_dto import CompassEventInputDto, CompassEventInputDtoDict


class CreateStreamlinedEventRequest(SdkBaseModel):
    cloud_id: str = Field(alias="cloudId")
    event: CompassEventInputDto
    """The type of event. One and only one of the fields in this input type must be provided."""

    component_id: OptionalNullable[str] = Field(default=UNSET, alias="componentId")


class CreateStreamlinedEventRequestDict(TypedDict):
    cloud_id: str
    event: CompassEventInputDtoDict
    component_id: NotRequired[str | None]
