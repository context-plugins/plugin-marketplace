from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1DraftsRequest(SdkBaseModel):
    html: str
    """The complete HTML document."""

    title: Optional[str] = UNSET
    source_tool: Optional[str] = Field(default=UNSET, alias="sourceTool")
    """Which AI or tool produced it."""


class ApiV1DraftsRequestDict(TypedDict):
    html: str
    title: NotRequired[str]
    source_tool: NotRequired[str]
