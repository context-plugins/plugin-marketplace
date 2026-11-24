from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1AccessRemove(SdkBaseModel):
    """Remove action. For example, "Remove" : { "name" : "target.name", "success" : true }"""

    name: Optional[str] = UNSET
    success: Optional[bool] = UNSET


class GoogleCloudApigeeV1AccessRemoveDict(TypedDict):
    name: NotRequired[str]
    success: NotRequired[bool]
