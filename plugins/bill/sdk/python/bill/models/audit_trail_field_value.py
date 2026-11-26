from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AuditTrailFieldValue(SdkBaseModel):
    """Previous and current values of the field as captured in Audit Trail Entry."""

    previous: Optional[str] = UNSET
    """Previous value"""

    current: Optional[str] = UNSET
    """Current value"""


class AuditTrailFieldValueDict(TypedDict):
    previous: NotRequired[str]
    current: NotRequired[str]
