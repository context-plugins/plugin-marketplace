from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.scan_state_dto import ScanStateDtoOrStr
from .public_api_check_slim_dto import PublicApiCheckSlimDto, PublicApiCheckSlimDtoDict
from .public_api_post_processing_stage_dto import PublicApiPostProcessingStageDto, PublicApiPostProcessingStageDtoDict
from .public_api_scan_definition_slim import PublicApiScanDefinitionSlim, PublicApiScanDefinitionSlimDict


class PublicApiScanStatusResponse(SdkBaseModel):
    agent_id: Optional[str] = Field(default=UNSET, alias="agentId")
    checks: Optional[list[PublicApiCheckSlimDto]] = UNSET
    cloud_url: str = Field(alias="cloudUrl")
    contract_dataset_cloud_url: Optional[str] = Field(default=UNSET, alias="contractDatasetCloudUrl")
    created: RFC3339DateTime
    ended: Optional[RFC3339DateTime] = UNSET
    errors: Optional[int] = UNSET
    failures: Optional[int] = UNSET
    id: str
    post_processing_stages: Optional[list[PublicApiPostProcessingStageDto]] = Field(
        default=UNSET, alias="postProcessingStages"
    )
    runner_id: Optional[str] = Field(default=UNSET, alias="runnerId")
    scan_definition: Optional[PublicApiScanDefinitionSlim] = Field(default=UNSET, alias="scanDefinition")
    scan_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="scanTime")
    started: Optional[RFC3339DateTime] = UNSET
    state: ScanStateDtoOrStr
    submitted: Optional[RFC3339DateTime] = UNSET
    warnings: Optional[int] = UNSET


class PublicApiScanStatusResponseDict(TypedDict):
    agent_id: NotRequired[str]
    checks: NotRequired[list[PublicApiCheckSlimDtoDict]]
    cloud_url: str
    contract_dataset_cloud_url: NotRequired[str]
    created: RFC3339DateTime
    ended: NotRequired[RFC3339DateTime]
    errors: NotRequired[int]
    failures: NotRequired[int]
    id: str
    post_processing_stages: NotRequired[list[PublicApiPostProcessingStageDtoDict]]
    runner_id: NotRequired[str]
    scan_definition: NotRequired[PublicApiScanDefinitionSlimDict]
    scan_time: NotRequired[RFC3339DateTime]
    started: NotRequired[RFC3339DateTime]
    state: ScanStateDtoOrStr
    submitted: NotRequired[RFC3339DateTime]
    warnings: NotRequired[int]
