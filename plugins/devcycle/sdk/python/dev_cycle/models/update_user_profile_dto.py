from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class UpdateUserProfileDto(SdkBaseModel):
    dvc_user_id: OptionalNullable[str] = Field(default=UNSET, alias="dvcUserId")
    """DVC User Id for User Profile. Mirrors the SDK ``user_id``, which is capped at 200 characters."""


class UpdateUserProfileDtoDict(TypedDict):
    dvc_user_id: NotRequired[str | None]
