from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.retry_type import RetryTypeOrStr


class RetryBuildBatchInput(SdkBaseModel):
    id: Optional[str] = UNSET
    """Specifies the identifier of the batch build to restart."""

    idempotency_token: Optional[str] = Field(default=UNSET, alias="idempotencyToken")
    """A unique, case sensitive identifier you provide to ensure the idempotency of the RetryBuildBatch request. The
    token is included in the RetryBuildBatch request and is valid for five minutes. If you repeat the RetryBuildBatch
    request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error."""

    retry_type: Optional[RetryTypeOrStr] = Field(default=UNSET, alias="retryType")
    """Specifies the type of retry to perform."""


class RetryBuildBatchInputDict(TypedDict):
    id: NotRequired[str]
    idempotency_token: NotRequired[str]
    retry_type: NotRequired[RetryTypeOrStr]
