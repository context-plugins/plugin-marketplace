from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status1_dev_cycle_management_variables_api import Status1DevCycleManagementVariablesApiOrStr


class UpdateVariableStatusDto(SdkBaseModel):
    status: Status1DevCycleManagementVariablesApiOrStr
    """Status field indicating whether a variable is actively being used, or is archived."""


class UpdateVariableStatusDtoDict(TypedDict):
    status: Status1DevCycleManagementVariablesApiOrStr
