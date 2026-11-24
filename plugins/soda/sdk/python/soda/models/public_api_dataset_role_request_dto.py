from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiDatasetRoleRequestDto(SdkBaseModel):
    configure_dataset: Optional[bool] = Field(default=UNSET, alias="configureDataset")
    create_check_proposals: Optional[bool] = Field(default=UNSET, alias="createCheckProposals")
    delete_dataset: Optional[bool] = Field(default=UNSET, alias="deleteDataset")
    manage_checks: Optional[bool] = Field(default=UNSET, alias="manageChecks")
    manage_contracts: Optional[bool] = Field(default=UNSET, alias="manageContracts")
    manage_incidents: Optional[bool] = Field(default=UNSET, alias="manageIncidents")
    manage_permissions: Optional[bool] = Field(default=UNSET, alias="managePermissions")
    name: str
    view_failed_rows: Optional[bool] = Field(default=UNSET, alias="viewFailedRows")
    view_profiling_and_samples: Optional[bool] = Field(default=UNSET, alias="viewProfilingAndSamples")


class PublicApiDatasetRoleRequestDtoDict(TypedDict):
    configure_dataset: NotRequired[bool]
    create_check_proposals: NotRequired[bool]
    delete_dataset: NotRequired[bool]
    manage_checks: NotRequired[bool]
    manage_contracts: NotRequired[bool]
    manage_incidents: NotRequired[bool]
    manage_permissions: NotRequired[bool]
    name: str
    view_failed_rows: NotRequired[bool]
    view_profiling_and_samples: NotRequired[bool]
