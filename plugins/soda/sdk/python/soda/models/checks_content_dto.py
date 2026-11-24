from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .agreement_slim_dto import AgreementSlimDto, AgreementSlimDtoDict
from .check_result_value_dto import CheckResultValueDto, CheckResultValueDtoDict
from .checks_content_dto_group import ChecksContentDtoGroup, ChecksContentDtoGroupDict
from .dataset_slim_dto import DatasetSlimDto, DatasetSlimDtoDict
from .enums.evaluation_status_dto import EvaluationStatusDtoOrStr
from .incident_slim_dto import IncidentSlimDto, IncidentSlimDtoDict
from .owner_dto import OwnerDto, OwnerDtoDict


class ChecksContentDto(SdkBaseModel):
    agreements: Optional[list[AgreementSlimDto]] = UNSET
    attributes: Optional[Any] = UNSET
    check_type: Optional[str] = Field(default=UNSET, alias="checkType")
    cloud_url: Optional[str] = Field(default=UNSET, alias="cloudUrl")
    column: Optional[str] = UNSET
    created_at: RFC3339DateTime = Field(alias="createdAt")
    datasets: list[DatasetSlimDto]
    definition: Optional[str] = UNSET
    description: Optional[str] = UNSET
    evaluation_status: EvaluationStatusDtoOrStr = Field(alias="evaluationStatus")
    group: Optional[ChecksContentDtoGroup] = UNSET
    id: str
    incidents: list[IncidentSlimDto]
    last_check_result_value: Optional[CheckResultValueDto] = Field(default=UNSET, alias="lastCheckResultValue")
    last_check_run_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastCheckRunTime")
    last_updated: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdated")
    metric_type: Optional[str] = Field(default=UNSET, alias="metricType")
    name: str
    owner: Optional[OwnerDto] = UNSET


class ChecksContentDtoDict(TypedDict):
    agreements: NotRequired[list[AgreementSlimDtoDict]]
    attributes: NotRequired[Any]
    check_type: NotRequired[str]
    cloud_url: NotRequired[str]
    column: NotRequired[str]
    created_at: RFC3339DateTime
    datasets: list[DatasetSlimDtoDict]
    definition: NotRequired[str]
    description: NotRequired[str]
    evaluation_status: EvaluationStatusDtoOrStr
    group: NotRequired[ChecksContentDtoGroupDict]
    id: str
    incidents: list[IncidentSlimDtoDict]
    last_check_result_value: NotRequired[CheckResultValueDtoDict]
    last_check_run_time: NotRequired[RFC3339DateTime]
    last_updated: NotRequired[RFC3339DateTime]
    metric_type: NotRequired[str]
    name: str
    owner: NotRequired[OwnerDtoDict]
