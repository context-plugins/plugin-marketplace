from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dynatrace_project_settings import DynatraceProjectSettings, DynatraceProjectSettingsDict
from .edge_db_settings import EdgeDbSettings, EdgeDbSettingsDict
from .feature_approval_workflow_settings import FeatureApprovalWorkflowSettings, FeatureApprovalWorkflowSettingsDict
from .life_cycle_settings import LifeCycleSettings, LifeCycleSettingsDict
from .obfuscation_settings import ObfuscationSettings, ObfuscationSettingsDict
from .opt_in_settings import OptInSettings, OptInSettingsDict
from .sdk_type_visibility_settings import SdkTypeVisibilitySettings, SdkTypeVisibilitySettingsDict
from .staleness_settings import StalenessSettings, StalenessSettingsDict


class ProjectSettings(SdkBaseModel):
    edge_db: EdgeDbSettings = Field(alias="edgeDB")
    opt_in: OptInSettings = Field(alias="optIn")
    sdk_type_visibility: SdkTypeVisibilitySettings = Field(alias="sdkTypeVisibility")
    life_cycle: LifeCycleSettings = Field(alias="lifeCycle")
    obfuscation: ObfuscationSettings
    feature_approval_workflow: FeatureApprovalWorkflowSettings = Field(alias="featureApprovalWorkflow")
    disable_passthrough_rollouts: bool = Field(alias="disablePassthroughRollouts")
    staleness: StalenessSettings
    dynatrace: DynatraceProjectSettings


class ProjectSettingsDict(TypedDict):
    edge_db: EdgeDbSettingsDict
    opt_in: OptInSettingsDict
    sdk_type_visibility: SdkTypeVisibilitySettingsDict
    life_cycle: LifeCycleSettingsDict
    obfuscation: ObfuscationSettingsDict
    feature_approval_workflow: FeatureApprovalWorkflowSettingsDict
    disable_passthrough_rollouts: bool
    staleness: StalenessSettingsDict
    dynatrace: DynatraceProjectSettingsDict
