from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.policy import PolicyOrStr


class ApiV1ManageProjectCodeSyncResponse(SdkBaseModel):
    policy: PolicyOrStr


class ApiV1ManageProjectCodeSyncResponseDict(TypedDict):
    policy: PolicyOrStr
