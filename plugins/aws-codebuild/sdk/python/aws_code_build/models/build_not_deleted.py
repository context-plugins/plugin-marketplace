from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BuildNotDeleted(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the build that could not be successfully deleted."""

    status_code: Optional[str] = Field(default=UNSET, alias="statusCode")
    """Additional information about the build that could not be successfully deleted."""


class BuildNotDeletedDict(TypedDict):
    id: NotRequired[str]
    status_code: NotRequired[str]
