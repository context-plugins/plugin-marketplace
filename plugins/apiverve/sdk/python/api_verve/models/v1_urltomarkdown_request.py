from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1UrltomarkdownRequest(SdkBaseModel):
    url: str
    """The URL of the webpage to convert to Markdown"""

    include_images: Optional[bool] = Field(default=UNSET, alias="includeImages")
    """Whether to include image references in the Markdown output"""

    include_links: Optional[bool] = Field(default=UNSET, alias="includeLinks")
    """Whether to include hyperlinks in the Markdown output"""


class V1UrltomarkdownRequestDict(TypedDict):
    url: str
    include_images: NotRequired[bool]
    include_links: NotRequired[bool]
