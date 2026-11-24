from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_jid_verify_api import Status1JidVerifyApiOrStr


class StatusJidVerifyApi(SdkBaseModel):
    status: Optional[Status1JidVerifyApiOrStr] = UNSET
    summary: Optional[str] = UNSET
    flags: Optional[list[Any]] = UNSET
    rules_version: Optional[str] = UNSET


class StatusJidVerifyApiDict(TypedDict):
    status: NotRequired[Status1JidVerifyApiOrStr]
    summary: NotRequired[str]
    flags: NotRequired[list[Any]]
    rules_version: NotRequired[str]
