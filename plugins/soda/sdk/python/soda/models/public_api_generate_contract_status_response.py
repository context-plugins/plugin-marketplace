from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.generate_contract_operation_state_dto import GenerateContractOperationStateDtoOrStr
from .public_api_generate_contract_status_response_dataset_generation_status import (
    PublicApiGenerateContractStatusResponseDatasetGenerationStatus,
    PublicApiGenerateContractStatusResponseDatasetGenerationStatusDict,
)


class PublicApiGenerateContractStatusResponse(SdkBaseModel):
    created: Optional[RFC3339DateTime] = UNSET
    datasets: Optional[list[PublicApiGenerateContractStatusResponseDatasetGenerationStatus]] = UNSET
    operation_id: Optional[str] = Field(default=UNSET, alias="operationId")
    state: Optional[GenerateContractOperationStateDtoOrStr] = UNSET


class PublicApiGenerateContractStatusResponseDict(TypedDict):
    created: NotRequired[RFC3339DateTime]
    datasets: NotRequired[list[PublicApiGenerateContractStatusResponseDatasetGenerationStatusDict]]
    operation_id: NotRequired[str]
    state: NotRequired[GenerateContractOperationStateDtoOrStr]
