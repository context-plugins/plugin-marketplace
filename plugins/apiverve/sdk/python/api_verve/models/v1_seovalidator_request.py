from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1SeovalidatorRequest(SdkBaseModel):
    url: str
    """The URL of the web page to validate the SEO metrics of"""


class V1SeovalidatorRequestDict(TypedDict):
    url: str
