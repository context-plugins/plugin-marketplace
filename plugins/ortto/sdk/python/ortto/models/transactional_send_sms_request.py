from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TransactionalSendSmsRequest(SdkBaseModel):
    sms_id: Optional[str] = UNSET
    merge_by: Optional[list[str]] = UNSET
    people: Optional[list[Any]] = UNSET


class TransactionalSendSmsRequestDict(TypedDict):
    sms_id: NotRequired[str]
    merge_by: NotRequired[list[str]]
    people: NotRequired[list[Any]]
