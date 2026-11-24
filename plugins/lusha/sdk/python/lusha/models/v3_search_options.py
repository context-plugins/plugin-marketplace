from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3SearchOptions(SdkBaseModel):
    """Additional options for search requests"""

    include_partial_profiles: Optional[bool] = Field(default=UNSET, alias="includePartialProfiles")
    """Include partial profiles in results"""


class V3SearchOptionsDict(TypedDict):
    include_partial_profiles: NotRequired[bool]
