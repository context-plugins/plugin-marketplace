from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TestPayload(SdkBaseModel):
    entity_type: Optional[str] = Field(default=UNSET, alias="entityType")
    signal_type: Optional[str] = Field(default=UNSET, alias="signalType")
    data: Optional[Any] = UNSET


class TestPayloadDict(TypedDict):
    entity_type: NotRequired[str]
    signal_type: NotRequired[str]
    data: NotRequired[Any]
