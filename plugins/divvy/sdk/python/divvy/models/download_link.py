from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DownloadLink(SdkBaseModel):
    csv: str
    """CSV format"""

    pdf: str
    """PDF format"""


class DownloadLinkDict(TypedDict):
    csv: str
    pdf: str
