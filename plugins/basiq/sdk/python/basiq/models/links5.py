from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links5(SdkBaseModel):
    self: Optional[str] = UNSET
    event_entity: Optional[str] = Field(default=UNSET, alias="eventEntity")
    event: Optional[str] = UNSET
    webhook: Optional[str] = UNSET
    next: Optional[str] = UNSET


class Links5Dict(TypedDict):
    self: NotRequired[str]
    event_entity: NotRequired[str]
    event: NotRequired[str]
    webhook: NotRequired[str]
    next: NotRequired[str]
