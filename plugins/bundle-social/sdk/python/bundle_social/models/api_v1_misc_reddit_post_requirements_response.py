from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscRedditPostRequirementsResponse(SdkBaseModel):
    is_flair_required: bool = Field(alias="isFlairRequired")
    is_flair_enabled: bool = Field(alias="isFlairEnabled")


class ApiV1MiscRedditPostRequirementsResponseDict(TypedDict):
    is_flair_required: bool
    is_flair_enabled: bool
