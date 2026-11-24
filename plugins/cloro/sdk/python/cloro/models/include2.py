from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Include2(SdkBaseModel):
    """Optional flags for including additional response formats"""

    model_config = ConfigDict(extra="forbid")

    html: bool = False
    """Include a URL to the full HTML of the response"""

    markdown: bool = False
    """Include markdown-formatted response in the result"""

    raw_response: bool = Field(default=False, alias="rawResponse")
    """Include raw streaming response events"""


class Include2Dict(TypedDict):
    html: NotRequired[bool]
    markdown: NotRequired[bool]
    raw_response: NotRequired[bool]
