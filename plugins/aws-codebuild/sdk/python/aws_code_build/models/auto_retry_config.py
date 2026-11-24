from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutoRetryConfig(SdkBaseModel):
    auto_retry_limit: Optional[int] = Field(default=UNSET, alias="autoRetryLimit")
    """The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is
    set to 2, CodeBuild will call the RetryBuild API to automatically retry your build for up to 2 additional times."""

    auto_retry_number: Optional[int] = Field(default=UNSET, alias="autoRetryNumber")
    """The number of times that the build has been retried. The initial build will have an auto-retry number of 0."""

    next_auto_retry: Optional[str] = Field(default=UNSET, alias="nextAutoRetry")
    """The build ARN of the auto-retried build triggered by the current build. The next auto-retry will be null for
    builds that don't trigger an auto-retry."""

    previous_auto_retry: Optional[str] = Field(default=UNSET, alias="previousAutoRetry")
    """The build ARN of the build that triggered the current auto-retry build. The previous auto-retry will be null for
    the initial build."""


class AutoRetryConfigDict(TypedDict):
    auto_retry_limit: NotRequired[int]
    auto_retry_number: NotRequired[int]
    next_auto_retry: NotRequired[str]
    previous_auto_retry: NotRequired[str]
