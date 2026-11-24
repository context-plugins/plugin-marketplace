from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DownloadLinkDto(SdkBaseModel):
    """DownloadLink response Dto."""

    csv: str
    """CSV format"""

    pdf: str
    """PDF format"""


class DownloadLinkDtoDict(TypedDict):
    csv: str
    pdf: str
