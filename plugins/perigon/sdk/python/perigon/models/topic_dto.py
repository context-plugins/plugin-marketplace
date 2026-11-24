from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .topic_labels import TopicLabels, TopicLabelsDict


class TopicDto(SdkBaseModel):
    id: OptionalNullable[int] = UNSET
    created_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    name: OptionalNullable[str] = UNSET
    labels: Optional[TopicLabels] = UNSET


class TopicDtoDict(TypedDict):
    id: NotRequired[int | None]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    name: NotRequired[str | None]
    labels: NotRequired[TopicLabelsDict]
