from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1AccessSet(SdkBaseModel):
    """Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default" }"""

    name: Optional[str] = UNSET
    value: Optional[str] = UNSET
    success: Optional[bool] = UNSET


class GoogleCloudApigeeV1AccessSetDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
    success: NotRequired[bool]
