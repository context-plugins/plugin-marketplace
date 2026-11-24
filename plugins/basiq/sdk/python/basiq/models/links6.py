from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links6(SdkBaseModel):
    self: Optional[str] = UNSET
    event: Optional[str] = UNSET
    webhook: Optional[str] = UNSET
    next: Optional[str] = UNSET


class Links6Dict(TypedDict):
    self: NotRequired[str]
    event: NotRequired[str]
    webhook: NotRequired[str]
    next: NotRequired[str]
