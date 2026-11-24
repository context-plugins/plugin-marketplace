from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3CompaniesTablesResponse(SdkBaseModel):
    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    status: Optional[str] = UNSET


class V3CompaniesTablesResponseDict(TypedDict):
    table_id: NotRequired[str]
    status: NotRequired[str]
