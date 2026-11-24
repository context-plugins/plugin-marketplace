from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IncludeSurfePeopleApi(SdkBaseModel):
    """Which fields to retrieve."""

    email: Optional[bool] = UNSET
    mobile: Optional[bool] = UNSET
    linked_in_url: Optional[bool] = Field(default=UNSET, alias="linkedInUrl")
    job_history: Optional[bool] = Field(default=UNSET, alias="jobHistory")


class IncludeSurfePeopleApiDict(TypedDict):
    email: NotRequired[bool]
    mobile: NotRequired[bool]
    linked_in_url: NotRequired[bool]
    job_history: NotRequired[bool]
