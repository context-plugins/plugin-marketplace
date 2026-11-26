from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Classifications1BillV3CreditMemosApi(SdkBaseModel):
    accounting_class_id: Optional[str] = Field(default=UNSET, alias="accountingClassId")
    """BILL-generated ID of the accounting class. The value begins with ``cls``."""

    department_id: Optional[str] = Field(default=UNSET, alias="departmentId")
    """BILL-generated ID of the department. The value begins with ``0de``."""

    job_id: Optional[str] = Field(default=UNSET, alias="jobId")
    """BILL-generated ID of the job. The value begins with ``job``."""

    location_id: Optional[str] = Field(default=UNSET, alias="locationId")
    """BILL-generated ID of the location. The value begins with ``loc``."""


class Classifications1BillV3CreditMemosApiDict(TypedDict):
    accounting_class_id: NotRequired[str]
    department_id: NotRequired[str]
    job_id: NotRequired[str]
    location_id: NotRequired[str]
