from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .telemetry_record import TelemetryRecord, TelemetryRecordDict


class TelemetryRecordsRequest(SdkBaseModel):
    telemetry_records: list[TelemetryRecord] = Field(alias="TelemetryRecords")
    ec2_instance_id: Optional[str] = Field(default=UNSET, alias="EC2InstanceId")
    hostname: Optional[str] = Field(default=UNSET, alias="Hostname")
    resource_arn: Optional[str] = Field(default=UNSET, alias="ResourceARN")


class TelemetryRecordsRequestDict(TypedDict):
    telemetry_records: list[TelemetryRecordDict]
    ec2_instance_id: NotRequired[str]
    hostname: NotRequired[str]
    resource_arn: NotRequired[str]
