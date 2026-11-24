from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workflow_type_configuration import WorkflowTypeConfiguration, WorkflowTypeConfigurationDict
from .workflow_type_info import WorkflowTypeInfo, WorkflowTypeInfoDict


class WorkflowTypeDetail(SdkBaseModel):
    type_info: WorkflowTypeInfo = Field(alias="typeInfo")
    configuration: WorkflowTypeConfiguration


class WorkflowTypeDetailDict(TypedDict):
    type_info: WorkflowTypeInfoDict
    configuration: WorkflowTypeConfigurationDict
