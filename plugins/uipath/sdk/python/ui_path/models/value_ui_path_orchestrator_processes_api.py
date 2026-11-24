from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValueUiPathOrchestratorProcessesApi(SdkBaseModel):
    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique process identifier"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """Process display name"""

    key: Optional[UUID] = Field(default=UNSET, alias="Key")
    """Unique GUID key for the process"""

    description: Optional[str] = Field(default=UNSET, alias="Description")
    """Process description"""

    process_version: Optional[str] = Field(default=UNSET, alias="ProcessVersion")
    """Version of the underlying package"""


class ValueUiPathOrchestratorProcessesApiDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    key: NotRequired[UUID]
    description: NotRequired[str]
    process_version: NotRequired[str]
