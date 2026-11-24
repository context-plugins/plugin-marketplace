from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Options(SdkBaseModel):
    include_partial_profiles: bool = Field(default=True, alias="includePartialProfiles")
    exclude_dnc: Optional[bool] = Field(default=UNSET, alias="excludeDnc")


class OptionsDict(TypedDict):
    include_partial_profiles: NotRequired[bool]
    exclude_dnc: NotRequired[bool]
