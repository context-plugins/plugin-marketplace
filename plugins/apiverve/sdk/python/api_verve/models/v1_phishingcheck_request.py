from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1PhishingcheckRequest(SdkBaseModel):
    domain: str
    """The domain to check (e.g., example.com)"""


class V1PhishingcheckRequestDict(TypedDict):
    domain: str
