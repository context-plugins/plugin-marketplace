from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Include(SdkBaseModel):
    """Optional flags for including additional response formats"""

    model_config = ConfigDict(extra="forbid")

    markdown: bool = False
    """Include markdown-formatted response in the result"""

    html: bool = False
    """Include HTML-formatted response in the result"""

    raw_response: bool = Field(default=False, alias="rawResponse")
    """Include raw streaming response events"""


class IncludeDict(TypedDict):
    markdown: NotRequired[bool]
    html: NotRequired[bool]
    raw_response: NotRequired[bool]
