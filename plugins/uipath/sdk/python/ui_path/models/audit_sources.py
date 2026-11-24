from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audit_source import AuditSource, AuditSourceDict


class AuditSources(SdkBaseModel):
    """Available audit event sources and categories"""

    sources: Optional[list[AuditSource]] = UNSET


class AuditSourcesDict(TypedDict):
    sources: NotRequired[list[AuditSourceDict]]
