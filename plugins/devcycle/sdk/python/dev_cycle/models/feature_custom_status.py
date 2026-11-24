from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class FeatureCustomStatus(SdkBaseModel):
    status: Optional[str] = Field(default=UNSET, alias="_status")
    """Custom status ID reference"""

    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Timestamp when the custom status was last updated"""


class FeatureCustomStatusDict(TypedDict):
    status: NotRequired[str]
    updated_at: NotRequired[RFC3339DateTime]
