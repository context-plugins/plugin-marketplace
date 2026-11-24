from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1AccessGet(SdkBaseModel):
    """Get action. For example, "Get" : { "name" : "target.name", "value" : "default" }"""

    value: Optional[str] = UNSET
    name: Optional[str] = UNSET


class GoogleCloudApigeeV1AccessGetDict(TypedDict):
    value: NotRequired[str]
    name: NotRequired[str]
