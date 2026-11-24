from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.generate_contract_operation_state_dto import GenerateContractOperationStateDtoOrStr


class PublicApiCreateSkeletonContractStatusResponse(SdkBaseModel):
    created: Optional[RFC3339DateTime] = UNSET
    dataset_id: Optional[str] = Field(default=UNSET, alias="datasetId")
    dataset_qualified_name: Optional[str] = Field(default=UNSET, alias="datasetQualifiedName")
    operation_id: Optional[str] = Field(default=UNSET, alias="operationId")
    state: Optional[GenerateContractOperationStateDtoOrStr] = UNSET


class PublicApiCreateSkeletonContractStatusResponseDict(TypedDict):
    created: NotRequired[RFC3339DateTime]
    dataset_id: NotRequired[str]
    dataset_qualified_name: NotRequired[str]
    operation_id: NotRequired[str]
    state: NotRequired[GenerateContractOperationStateDtoOrStr]
