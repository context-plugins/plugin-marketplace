from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .program_management_account import ProgramManagementAccount, ProgramManagementAccountDict


class ProgramManagementAccountList(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    items: list[ProgramManagementAccount]
    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Opaque cursor for the next page. Absent when this is the last page."""

    row_count: int = Field(alias="rowCount")


class ProgramManagementAccountListDict(TypedDict):
    items: list[ProgramManagementAccountDict]
    page_token: NotRequired[str]
    row_count: int
