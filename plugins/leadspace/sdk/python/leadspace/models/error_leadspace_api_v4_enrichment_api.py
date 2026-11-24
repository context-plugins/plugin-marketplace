from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorLeadspaceApiV4EnrichmentApi(SdkBaseModel):
    """General Leadspace JSON error envelope"""

    error: Optional[str] = UNSET
    """Error description"""

    tracking_id: Optional[str] = UNSET
    """Leadspace tracking identifier for further inspection"""

    request_timestamp: Optional[str] = UNSET
    """Timestamp assigned when the request reached Leadspace servers"""

    details: Optional[str] = UNSET


class ErrorLeadspaceApiV4EnrichmentApiDict(TypedDict):
    error: NotRequired[str]
    tracking_id: NotRequired[str]
    request_timestamp: NotRequired[str]
    details: NotRequired[str]
