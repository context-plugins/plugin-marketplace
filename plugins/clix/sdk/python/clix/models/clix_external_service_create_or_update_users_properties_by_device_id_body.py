from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .clixexternalv1_user_property import Clixexternalv1UserProperty, Clixexternalv1UserPropertyDict


class ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody(SdkBaseModel):
    properties: Optional[list[Clixexternalv1UserProperty]] = UNSET


class ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodyDict(TypedDict):
    properties: NotRequired[list[Clixexternalv1UserPropertyDict]]
