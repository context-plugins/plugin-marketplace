from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class LastSyncError(SdkBaseModel):
    code: OptionalNullable[str] = UNSET
    message: OptionalNullable[str] = UNSET
    retryable: OptionalNullable[bool] = UNSET
    __pydantic_extra__: dict[str, Any] = Field(init=False)


class LastSyncErrorDict(TypedDict, extra_items=Any):  # type: ignore[call-arg, unused-ignore]
    code: NotRequired[str | None]
    message: NotRequired[str | None]
    retryable: NotRequired[bool | None]
