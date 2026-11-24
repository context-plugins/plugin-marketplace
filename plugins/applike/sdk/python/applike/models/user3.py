from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class User3(SdkBaseModel):
    id: Optional[str] = UNSET
    """id of the user, that was provided to the justtrack sdk through SetUserId. It is NOT the legacy justtrack user
    id."""

    install_instance_id: Optional[UUID] = Field(default=UNSET, alias="installInstanceId")
    """36 character uuid of the installation. Does not change across reinstalls as part of retargeting. Can be retrieved
    from the justtrack sdk by calling getInstallInstanceId."""

    attribution_id: Optional[UUID] = Field(default=UNSET, alias="attributionId")
    """36 character uuid of the attribution of the user."""

    device_id: str = Field(alias="deviceId")
    """GAID or IDFA, depending on platform"""


class User3Dict(TypedDict):
    id: NotRequired[str]
    install_instance_id: NotRequired[UUID]
    attribution_id: NotRequired[UUID]
    device_id: str
