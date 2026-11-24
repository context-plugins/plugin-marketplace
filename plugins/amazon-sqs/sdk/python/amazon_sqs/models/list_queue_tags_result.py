from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListQueueTagsResult(SdkBaseModel):
    tags: Optional[dict[str, str]] = Field(default=UNSET, alias="Tags")
    """The list of all tags added to the specified queue."""


class ListQueueTagsResultDict(TypedDict):
    tags: NotRequired[dict[str, str]]
