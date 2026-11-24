from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.model_status2 import ModelStatus2OrStr


class UpdateLanguageModelResponse(SdkBaseModel):
    model_name: Optional[str] = Field(default=UNSET, alias="ModelName")
    """The name of the custom language model that was updated."""

    model_status: Optional[ModelStatus2OrStr] = Field(default=UNSET, alias="ModelStatus")
    """The status of the specified custom language model."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """The date and time the specified custom language model was last modified."""


class UpdateLanguageModelResponseDict(TypedDict):
    model_name: NotRequired[str]
    model_status: NotRequired[ModelStatus2OrStr]
    last_modified_time: NotRequired[RFC3339DateTime]
