from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .software_configuration_summary import SoftwareConfigurationSummary, SoftwareConfigurationSummaryDict


class SoftwareConfigurationRecordsResponse(SdkBaseModel):
    software_configuration_list: Optional[list[SoftwareConfigurationSummary]] = Field(
        default=UNSET, alias="softwareConfigurationList"
    )
    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")


class SoftwareConfigurationRecordsResponseDict(TypedDict):
    software_configuration_list: NotRequired[list[SoftwareConfigurationSummaryDict]]
    next_token: NotRequired[str]
