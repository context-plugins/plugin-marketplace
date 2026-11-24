from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateRequirementRequest(SdkBaseModel):
    """Request payload for creating a new requirement"""

    name: str
    """Display name for the new requirement"""

    description: Optional[str] = UNSET
    """Detailed description of the requirement specification"""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """Optional external identifier for integration with third-party tools"""


class CreateRequirementRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    external_id: NotRequired[str]
