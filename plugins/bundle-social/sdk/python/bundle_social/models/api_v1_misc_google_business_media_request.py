from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.category import Category, CategoryOrStr


class ApiV1MiscGoogleBusinessMediaRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    upload_id: str = Field(alias="uploadId")
    category: CategoryOrStr = Category.ADDITIONAL
    description: Optional[str] = UNSET


class ApiV1MiscGoogleBusinessMediaRequestDict(TypedDict):
    team_id: str
    upload_id: str
    category: NotRequired[CategoryOrStr]
    description: NotRequired[str]
