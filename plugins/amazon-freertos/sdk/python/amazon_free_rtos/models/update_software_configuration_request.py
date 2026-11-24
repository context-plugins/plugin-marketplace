from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateSoftwareConfigurationRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET


class UpdateSoftwareConfigurationRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
