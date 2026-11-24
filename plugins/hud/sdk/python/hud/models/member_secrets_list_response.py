from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .member_secret_item import MemberSecretItem, MemberSecretItemDict


class MemberSecretsListResponse(SdkBaseModel):
    secrets: list[MemberSecretItem]


class MemberSecretsListResponseDict(TypedDict):
    secrets: list[MemberSecretItemDict]
