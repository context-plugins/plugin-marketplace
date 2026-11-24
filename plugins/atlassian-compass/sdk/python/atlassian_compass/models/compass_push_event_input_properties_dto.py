from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .compass_push_event_author_input_dto import CompassPushEventAuthorInputDto, CompassPushEventAuthorInputDtoDict


class CompassPushEventInputPropertiesDto(SdkBaseModel):
    """The list of properties of the push event."""

    id: str
    """The ID of the push to event."""

    branch_name: str = Field(alias="branchName")
    """The name of the branch being pushed to."""

    author: OptionalNullable[CompassPushEventAuthorInputDto] = UNSET
    """The author who made the push."""


class CompassPushEventInputPropertiesDtoDict(TypedDict):
    id: str
    branch_name: str
    author: NotRequired[CompassPushEventAuthorInputDtoDict | None]
