from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.confidential_instance_type import ConfidentialInstanceTypeOrStr


class ConfidentialInstanceConfig2(SdkBaseModel):
    """Optional. Confidential Instance Config for clusters using Confidential VMs
    (https://cloud.google.com/confidential-computing/confidential-vm/docs)."""

    confidential_instance_type: Optional[ConfidentialInstanceTypeOrStr] = Field(
        default=UNSET, alias="confidentialInstanceType"
    )
    """Optional. Defines the type of Confidential Compute technology to use."""

    enable_confidential_compute: Optional[bool] = Field(default=UNSET, alias="enableConfidentialCompute")
    """Optional. Deprecated: Use 'confidential_instance_type' instead. Defines whether the instance should have
    confidential compute enabled."""


class ConfidentialInstanceConfig2Dict(TypedDict):
    confidential_instance_type: NotRequired[ConfidentialInstanceTypeOrStr]
    enable_confidential_compute: NotRequired[bool]
