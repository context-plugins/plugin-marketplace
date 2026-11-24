from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class OtaUpdateSummary(SdkBaseModel):
    """Summary of an OTA update."""

    ota_update_id: Optional[str] = Field(default=UNSET, alias="otaUpdateId")
    ota_update_arn: Optional[str] = Field(default=UNSET, alias="otaUpdateArn")
    creation_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDate")


class OtaUpdateSummaryDict(TypedDict):
    ota_update_id: NotRequired[str]
    ota_update_arn: NotRequired[str]
    creation_date: NotRequired[RFC3339DateTime]
