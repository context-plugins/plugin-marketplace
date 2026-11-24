from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PulsePatch(SdkBaseModel):
    eins: Optional[list[str]] = UNSET
    name: Optional[str] = UNSET
    frequency: Optional[str] = UNSET
    checks: Optional[list[str]] = UNSET
    email_to: Optional[list[str]] = UNSET
    email_mode: Optional[str] = UNSET
    active: Optional[bool] = UNSET
    unsubscribe_url: Optional[str] = UNSET


class PulsePatchDict(TypedDict):
    eins: NotRequired[list[str]]
    name: NotRequired[str]
    frequency: NotRequired[str]
    checks: NotRequired[list[str]]
    email_to: NotRequired[list[str]]
    email_mode: NotRequired[str]
    active: NotRequired[bool]
    unsubscribe_url: NotRequired[str]
