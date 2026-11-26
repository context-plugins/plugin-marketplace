from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.credential_type import CredentialTypeOrStr


class UsageResponse(SdkBaseModel):
    usage: int
    user_id: OptionalNullable[str] = UNSET
    credential_type: CredentialTypeOrStr
    client_id: OptionalNullable[str] = UNSET


class UsageResponseDict(TypedDict):
    usage: int
    user_id: NotRequired[str | None]
    credential_type: CredentialTypeOrStr
    client_id: NotRequired[str | None]
