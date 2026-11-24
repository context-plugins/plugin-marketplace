from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class BulkTemplatesRequest(SdkBaseModel):
    name: str
    description: OptionalNullable[str] = UNSET
    html_content: str
    """HTML with {{field}} placeholders"""


class BulkTemplatesRequestDict(TypedDict):
    name: str
    description: NotRequired[str | None]
    html_content: str
