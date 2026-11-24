from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpaceGroupCreateRequest(SdkBaseModel):
    name: str
    """name of space group"""

    is_llm_enabled: Optional[bool] = Field(default=UNSET, alias="isLlmEnabled")
    """whether AI will be enabled"""

    is_review_system_enabled: Optional[bool] = Field(default=UNSET, alias="isReviewSystemEnabled")
    """whether review system will be enabled"""

    is_branching_system_enabled: Optional[bool] = Field(default=UNSET, alias="isBranchingSystemEnabled")
    """whether branching will be enabled"""


class SpaceGroupCreateRequestDict(TypedDict):
    name: str
    is_llm_enabled: NotRequired[bool]
    is_review_system_enabled: NotRequired[bool]
    is_branching_system_enabled: NotRequired[bool]
