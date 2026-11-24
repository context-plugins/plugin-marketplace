from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .instance_selection import InstanceSelection, InstanceSelectionDict
from .instance_selection_result import InstanceSelectionResult, InstanceSelectionResultDict
from .provisioning_model_mix2 import ProvisioningModelMix2, ProvisioningModelMix2Dict


class InstanceFlexibilityPolicy(SdkBaseModel):
    """Instance flexibility Policy allowing a mixture of VM shapes and provisioning models."""

    provisioning_model_mix: Optional[ProvisioningModelMix2] = Field(default=UNSET, alias="provisioningModelMix")
    """Optional. Defines how the Group selects the provisioning model to ensure required reliability."""

    instance_machine_types: Optional[dict[str, str]] = Field(default=UNSET, alias="instanceMachineTypes")
    """Output only. A map of instance short name to machine type. The key is the short name of the Compute Engine
    instance, and the value is the full machine-type name (e.g., 'n1-standard-16'). See Machine types for more
    information on valid machine type strings."""

    instance_selection_list: Optional[list[InstanceSelection]] = Field(default=UNSET, alias="instanceSelectionList")
    """Optional. List of instance selection options that the group will use when creating new VMs."""

    instance_selection_results: Optional[list[InstanceSelectionResult]] = Field(
        default=UNSET, alias="instanceSelectionResults"
    )
    """Output only. A list of instance selection results in the group."""


class InstanceFlexibilityPolicyDict(TypedDict):
    provisioning_model_mix: NotRequired[ProvisioningModelMix2Dict]
    instance_machine_types: NotRequired[dict[str, str]]
    instance_selection_list: NotRequired[list[InstanceSelectionDict]]
    instance_selection_results: NotRequired[list[InstanceSelectionResultDict]]
