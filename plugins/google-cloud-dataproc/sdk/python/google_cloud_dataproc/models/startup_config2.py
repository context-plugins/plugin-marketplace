from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartupConfig2(SdkBaseModel):
    """Optional. Configuration to handle the startup of instances during cluster create and update process."""

    required_registration_fraction: Optional[float] = Field(default=UNSET, alias="requiredRegistrationFraction")
    """Optional. The config setting to enable cluster creation/ updation to be successful only after
    required_registration_fraction of instances are up and running. This configuration is applicable to only secondary
    workers for now. The cluster will fail if required_registration_fraction of instances are not available. This will
    include instance creation, agent registration, and service registration (if enabled)."""


class StartupConfig2Dict(TypedDict):
    required_registration_fraction: NotRequired[float]
