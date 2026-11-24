from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DeleteCustomReportResponse(SdkBaseModel):
    message: Optional[str] = UNSET
    """The response contains only a message field."""


class GoogleCloudApigeeV1DeleteCustomReportResponseDict(TypedDict):
    message: NotRequired[str]
