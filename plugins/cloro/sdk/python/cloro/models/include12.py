from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Include12(SdkBaseModel):
    """Optional flags for including additional response formats"""

    model_config = ConfigDict(extra="forbid")

    html: bool = False
    """Include a URL to the full HTML of the page that Bing rendered"""

    markdown: bool = False
    """Include the answer formatted in Markdown in the result. ``result.markdown`` is returned only when this is
    ``true``."""


class Include12Dict(TypedDict):
    html: NotRequired[bool]
    markdown: NotRequired[bool]
