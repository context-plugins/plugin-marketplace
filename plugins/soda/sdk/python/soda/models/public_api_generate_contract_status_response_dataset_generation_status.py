from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scan_state_dto import ScanStateDtoOrStr


class PublicApiGenerateContractStatusResponseDatasetGenerationStatus(SdkBaseModel):
    dataset_id: Optional[str] = Field(default=UNSET, alias="datasetId")
    dataset_qualified_name: Optional[str] = Field(default=UNSET, alias="datasetQualifiedName")
    scan_cloud_url: Optional[str] = Field(default=UNSET, alias="scanCloudUrl")
    scan_id: Optional[str] = Field(default=UNSET, alias="scanId")
    scan_state: Optional[ScanStateDtoOrStr] = Field(default=UNSET, alias="scanState")


class PublicApiGenerateContractStatusResponseDatasetGenerationStatusDict(TypedDict):
    dataset_id: NotRequired[str]
    dataset_qualified_name: NotRequired[str]
    scan_cloud_url: NotRequired[str]
    scan_id: NotRequired[str]
    scan_state: NotRequired[ScanStateDtoOrStr]
