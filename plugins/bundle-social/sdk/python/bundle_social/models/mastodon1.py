from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.retryability import RetryabilityOrStr


class Mastodon1(SdkBaseModel):
    code: OptionalNullable[str] = UNSET
    error_message: OptionalNullable[str] = Field(default=UNSET, alias="errorMessage")
    is_transient: OptionalNullable[bool] = Field(default=UNSET, alias="isTransient")
    retryability: OptionalNullable[RetryabilityOrStr] = UNSET
    http_status: OptionalNullable[float] = Field(default=UNSET, alias="httpStatus")
    meta: Optional[Any] = UNSET
    user_facing_message: OptionalNullable[str] = Field(default=UNSET, alias="userFacingMessage")


class Mastodon1Dict(TypedDict):
    code: NotRequired[str | None]
    error_message: NotRequired[str | None]
    is_transient: NotRequired[bool | None]
    retryability: NotRequired[RetryabilityOrStr | None]
    http_status: NotRequired[float | None]
    meta: NotRequired[Any]
    user_facing_message: NotRequired[str | None]
