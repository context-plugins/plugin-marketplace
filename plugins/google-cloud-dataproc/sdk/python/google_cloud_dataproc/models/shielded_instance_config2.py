from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ShieldedInstanceConfig2(SdkBaseModel):
    """Optional. Shielded Instance Config for clusters using Compute Engine Shielded VMs
    (https://cloud.google.com/security/shielded-cloud/shielded-vm)."""

    enable_secure_boot: Optional[bool] = Field(default=UNSET, alias="enableSecureBoot")
    """Optional. Defines whether instances have Secure Boot enabled."""

    enable_vtpm: Optional[bool] = Field(default=UNSET, alias="enableVtpm")
    """Optional. Defines whether instances have the vTPM enabled."""

    enable_integrity_monitoring: Optional[bool] = Field(default=UNSET, alias="enableIntegrityMonitoring")
    """Optional. Defines whether instances have integrity monitoring enabled."""


class ShieldedInstanceConfig2Dict(TypedDict):
    enable_secure_boot: NotRequired[bool]
    enable_vtpm: NotRequired[bool]
    enable_integrity_monitoring: NotRequired[bool]
