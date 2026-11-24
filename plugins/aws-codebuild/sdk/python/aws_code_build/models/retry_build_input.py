from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RetryBuildInput(SdkBaseModel):
    id: Optional[str] = UNSET
    """Specifies the identifier of the build to restart."""

    idempotency_token: Optional[str] = Field(default=UNSET, alias="idempotencyToken")
    """A unique, case sensitive identifier you provide to ensure the idempotency of the RetryBuild request. The token is
    included in the RetryBuild request and is valid for five minutes. If you repeat the RetryBuild request with the same
    token, but change a parameter, CodeBuild returns a parameter mismatch error."""


class RetryBuildInputDict(TypedDict):
    id: NotRequired[str]
    idempotency_token: NotRequired[str]
