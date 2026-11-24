from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3CompaniesTablesColumnsResponse(SdkBaseModel):
    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    column_id: Optional[str] = Field(default=UNSET, alias="columnId")
    removed: Optional[bool] = UNSET


class V3CompaniesTablesColumnsResponseDict(TypedDict):
    table_id: NotRequired[str]
    column_id: NotRequired[str]
    removed: NotRequired[bool]
