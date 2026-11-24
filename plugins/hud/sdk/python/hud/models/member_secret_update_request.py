from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MemberSecretUpdateRequest(SdkBaseModel):
    value: str


class MemberSecretUpdateRequestDict(TypedDict):
    value: str
