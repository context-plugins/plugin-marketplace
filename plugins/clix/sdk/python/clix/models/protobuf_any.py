from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProtobufAny(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="@type")
    __pydantic_extra__: dict[str, Any] = Field(init=False)


class ProtobufAnyDict(TypedDict, extra_items=Any):  # type: ignore[call-arg, unused-ignore]
    type_: NotRequired[str]
