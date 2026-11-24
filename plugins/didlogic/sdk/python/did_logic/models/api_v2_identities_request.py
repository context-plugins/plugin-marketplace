from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .identity1 import Identity1, Identity1Dict


class ApiV2IdentitiesRequest(SdkBaseModel):
    identity: Optional[Identity1] = UNSET


class ApiV2IdentitiesRequestDict(TypedDict):
    identity: NotRequired[Identity1Dict]
