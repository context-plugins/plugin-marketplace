from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class BulkTemplatesRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    description: OptionalNullable[str] = UNSET
    html_content: Optional[str] = UNSET


class BulkTemplatesRequest1Dict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str | None]
    html_content: NotRequired[str]
