from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DownloadLinkBillV3PaymentsApi(SdkBaseModel):
    """Download link for CheckImageDataResponseDto."""

    download_link: Optional[str] = Field(default=UNSET, alias="downloadLink")
    """URL for downloading the check image. Use the URL in a GET request to download the check image."""


class DownloadLinkBillV3PaymentsApiDict(TypedDict):
    download_link: NotRequired[str]
