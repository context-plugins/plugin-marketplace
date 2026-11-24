from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ApiErrorError(SdkBaseModel):
    ok: OptionalNullable[bool] = UNSET
    message: OptionalNullable[str] = UNSET
    error: OptionalNullable[str] = UNSET
    errors: OptionalNullable[Any] = UNSET
    status: Optional[int] = UNSET
    code: Optional[str] = UNSET


class ApiErrorErrorDict(TypedDict):
    ok: NotRequired[bool | None]
    message: NotRequired[str | None]
    error: NotRequired[str | None]
    errors: NotRequired[Any | None]
    status: NotRequired[int]
    code: NotRequired[str]
