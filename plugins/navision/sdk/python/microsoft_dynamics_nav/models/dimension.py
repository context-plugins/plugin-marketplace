from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Dimension(SdkBaseModel):
    id: Optional[UUID] = UNSET
    code: Optional[str] = UNSET
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class DimensionDict(TypedDict):
    id: NotRequired[UUID]
    code: NotRequired[str]
    display_name: NotRequired[str]
    last_modified_date_time: NotRequired[RFC3339DateTime]
