from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ReportsRollbackRequest(SdkBaseModel):
    version: Optional[int] = UNSET
    """Version number to restore"""

    version_id: Optional[UUID] = Field(default=UNSET, alias="versionId")
    """Version id, if you have it instead of the number"""


class ApiV1ReportsRollbackRequestDict(TypedDict):
    version: NotRequired[int]
    version_id: NotRequired[UUID]
