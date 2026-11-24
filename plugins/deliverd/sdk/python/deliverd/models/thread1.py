from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Thread1(SdkBaseModel):
    thread_id: UUID = Field(alias="threadId")
    __pydantic_extra__: dict[str, Any] = Field(init=False)


class Thread1Dict(TypedDict, extra_items=Any):  # type: ignore[call-arg, unused-ignore]
    thread_id: UUID
