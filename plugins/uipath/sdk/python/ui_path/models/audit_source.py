from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AuditSource(SdkBaseModel):
    """A service that generates audit events"""

    name: Optional[str] = UNSET
    """Name identifier of the audit event source service"""

    targets: Optional[list[str]] = UNSET
    """List of event target categories for this source"""


class AuditSourceDict(TypedDict):
    name: NotRequired[str]
    targets: NotRequired[list[str]]
