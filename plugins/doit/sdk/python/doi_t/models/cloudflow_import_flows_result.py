from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloudflow_import_created_resource import CloudflowImportCreatedResource, CloudflowImportCreatedResourceDict
from .flow import Flow, FlowDict


class CloudflowImportFlowsResult(SdkBaseModel):
    flows: list[Flow]
    created_tables: Optional[list[CloudflowImportCreatedResource]] = Field(default=UNSET, alias="createdTables")
    created_global_variables: Optional[list[CloudflowImportCreatedResource]] = Field(
        default=UNSET, alias="createdGlobalVariables"
    )
    orphaned_resources: Optional[list[CloudflowImportCreatedResource]] = Field(default=UNSET, alias="orphanedResources")
    """Side resources created before a failed import that best-effort rollback could not remove."""


class CloudflowImportFlowsResultDict(TypedDict):
    flows: list[FlowDict]
    created_tables: NotRequired[list[CloudflowImportCreatedResourceDict]]
    created_global_variables: NotRequired[list[CloudflowImportCreatedResourceDict]]
    orphaned_resources: NotRequired[list[CloudflowImportCreatedResourceDict]]
