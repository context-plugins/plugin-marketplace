from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CompaniesApiFeaturesApiMicrosoftNavActivateRequest(SdkBaseModel):
    update_in_background: bool = Field(default=False, alias="updateInBackground")
    start_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDateTime")


class CompaniesApiFeaturesApiMicrosoftNavActivateRequestDict(TypedDict):
    update_in_background: NotRequired[bool]
    start_date_time: NotRequired[RFC3339DateTime]
