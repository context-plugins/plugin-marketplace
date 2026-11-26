from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .field_model import FieldModel, FieldModelDict
from .user_bill_v3_reports_api import UserBillV3ReportsApi, UserBillV3ReportsApiDict


class AuditTrailEntry(SdkBaseModel):
    """Audit trail details response."""

    source: Optional[str] = UNSET
    """Set as ``API`` when the create or edit operation is completed with the API"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Operation type (``CREATE`` or ``EDIT``)"""

    created_time: Optional[str] = Field(default=UNSET, alias="createdTime")
    """Created date and time of the audit trail record"""

    user: Optional[UserBillV3ReportsApi] = UNSET
    field: Optional[FieldModel] = UNSET


class AuditTrailEntryDict(TypedDict):
    source: NotRequired[str]
    type_: NotRequired[str]
    created_time: NotRequired[str]
    user: NotRequired[UserBillV3ReportsApiDict]
    field: NotRequired[FieldModelDict]
