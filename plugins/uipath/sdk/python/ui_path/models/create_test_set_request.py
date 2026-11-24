from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateTestSetRequest(SdkBaseModel):
    """Request payload for creating a new test set"""

    name: str
    """Display name for the new test set"""

    description: Optional[str] = UNSET
    """Optional description of the test set's purpose"""


class CreateTestSetRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
