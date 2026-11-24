from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ContactextractorRequest(SdkBaseModel):
    url: str
    """The URL of the web page to extract contact data from"""

    limit: Optional[float] = UNSET
    """Limits the number of found contact details found on the page. Set -1 for unlimited"""


class V1ContactextractorRequestDict(TypedDict):
    url: str
    limit: NotRequired[float]
