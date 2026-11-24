from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value import Value, ValueDict


class AuditTrailField(SdkBaseModel):
    """Field whose change was captured in Audit Trail Entry."""

    name: Optional[str] = UNSET
    """Field name"""

    value: Optional[Value] = UNSET


class AuditTrailFieldDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[ValueDict]
