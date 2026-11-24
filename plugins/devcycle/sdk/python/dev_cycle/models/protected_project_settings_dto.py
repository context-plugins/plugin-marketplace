from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .feature_approval_workflow_dto import FeatureApprovalWorkflowDto, FeatureApprovalWorkflowDtoDict
from .staleness_settings_dto import StalenessSettingsDto, StalenessSettingsDtoDict


class ProtectedProjectSettingsDto(SdkBaseModel):
    feature_approval_workflow: FeatureApprovalWorkflowDto = Field(alias="featureApprovalWorkflow")
    staleness: StalenessSettingsDto


class ProtectedProjectSettingsDtoDict(TypedDict):
    feature_approval_workflow: FeatureApprovalWorkflowDtoDict
    staleness: StalenessSettingsDtoDict
