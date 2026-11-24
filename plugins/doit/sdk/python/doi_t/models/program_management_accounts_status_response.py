from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .program_management_account_status import ProgramManagementAccountStatus, ProgramManagementAccountStatusDict


class ProgramManagementAccountsStatusResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    items: list[ProgramManagementAccountStatus]


class ProgramManagementAccountsStatusResponseDict(TypedDict):
    items: list[ProgramManagementAccountStatusDict]
