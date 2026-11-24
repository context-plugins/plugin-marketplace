from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiUpdateUserGroupRequestDto(SdkBaseModel):
    user_ids: Optional[list[str]] = Field(default=UNSET, alias="userIds")


class PublicApiUpdateUserGroupRequestDtoDict(TypedDict):
    user_ids: NotRequired[list[str]]
