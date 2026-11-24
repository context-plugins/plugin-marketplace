from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Options1(SdkBaseModel):
    include_partial_profiles: bool = Field(default=False, alias="includePartialProfiles")


class Options1Dict(TypedDict):
    include_partial_profiles: NotRequired[bool]
