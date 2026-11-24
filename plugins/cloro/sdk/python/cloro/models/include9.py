from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Include9(SdkBaseModel):
    """Optional flags for including additional response formats"""

    model_config = ConfigDict(extra="forbid")

    html: bool = False
    """Include a URL to the full HTML of the response"""

    markdown: bool = False
    """Include markdown-formatted response in the result. ``result.markdown`` is returned only when this is ``true``."""

    google_goto: bool = Field(default=False, alias="googleGoto")
    """Ignored since 8th September 2026. Every redirect link now ships as ``redirectLink`` beside its destination, so
    both are returned without this flag. Requests still sending it behave as if it were absent."""


class Include9Dict(TypedDict):
    html: NotRequired[bool]
    markdown: NotRequired[bool]
    google_goto: NotRequired[bool]
