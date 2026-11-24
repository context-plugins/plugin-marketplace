from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ErrorResponseError(SdkBaseModel):
    status: OptionalNullable[int] = UNSET
    message: OptionalNullable[str] = UNSET
    timestamp: OptionalNullable[int] = UNSET


class ErrorResponseErrorDict(TypedDict):
    status: NotRequired[int | None]
    message: NotRequired[str | None]
    timestamp: NotRequired[int | None]
