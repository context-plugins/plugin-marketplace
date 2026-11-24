from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.ota_update_status import OtaUpdateStatusOrStr
from .enums.protocol import ProtocolOrStr


class OtaUpdate(SdkBaseModel):
    """An over-the-air (OTA) firmware update job for FreeRTOS devices."""

    ota_update_id: str = Field(alias="otaUpdateId")
    ota_update_arn: Optional[str] = Field(default=UNSET, alias="otaUpdateArn")
    ota_update_status: Optional[OtaUpdateStatusOrStr] = Field(default=UNSET, alias="otaUpdateStatus")
    description: Optional[str] = UNSET
    targets: list[str]
    protocols: Optional[list[ProtocolOrStr]] = UNSET
    creation_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDate")
    last_modified_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDate")
    aws_iot_job_id: Optional[str] = Field(default=UNSET, alias="awsIotJobId")
    aws_iot_job_arn: Optional[str] = Field(default=UNSET, alias="awsIotJobArn")


class OtaUpdateDict(TypedDict):
    ota_update_id: str
    ota_update_arn: NotRequired[str]
    ota_update_status: NotRequired[OtaUpdateStatusOrStr]
    description: NotRequired[str]
    targets: list[str]
    protocols: NotRequired[list[ProtocolOrStr]]
    creation_date: NotRequired[RFC3339DateTime]
    last_modified_date: NotRequired[RFC3339DateTime]
    aws_iot_job_id: NotRequired[str]
    aws_iot_job_arn: NotRequired[str]
