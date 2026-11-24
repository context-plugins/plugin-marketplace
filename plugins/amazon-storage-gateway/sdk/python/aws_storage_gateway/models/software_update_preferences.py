from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.automatic_update_policy import AutomaticUpdatePolicyOrStr


class SoftwareUpdatePreferences(SdkBaseModel):
    automatic_update_policy: Optional[AutomaticUpdatePolicyOrStr] = Field(default=UNSET, alias="AutomaticUpdatePolicy")
    """Indicates the automatic update policy for a gateway. ALL_VERSIONS - Enables regular gateway maintenance updates.
    EMERGENCY_VERSIONS_ONLY - Disables regular gateway maintenance updates. The gateway will still receive emergency
    version updates on rare occasions if necessary to remedy highly critical security or durability issues. You will be
    notified before an emergency version update is applied. These updates are applied during your gateway's scheduled
    maintenance window."""


class SoftwareUpdatePreferencesDict(TypedDict):
    automatic_update_policy: NotRequired[AutomaticUpdatePolicyOrStr]
