from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudEventarcV1PipelineRetryPolicy(SdkBaseModel):
    """The retry policy configuration for the Pipeline. The pipeline exponentially backs off in case the destination is
    non responsive or returns a retryable error code. The default semantics are as follows: The backoff starts with a 5
    second delay and doubles the delay after each failed attempt (10 seconds, 20 seconds, 40 seconds, etc.). The delay
    is capped at 60 seconds by default. Please note that if you set the min_retry_delay and max_retry_delay fields to
    the same value this will make the duration between retries constant."""

    max_retry_delay: Optional[str] = Field(default=UNSET, alias="maxRetryDelay")
    """Optional. The maximum amount of seconds to wait between retry attempts. The value must be between 1 and 600. The
    default value for this field is 60."""

    max_attempts: Optional[int] = Field(default=UNSET, alias="maxAttempts")
    """Optional. The maximum number of delivery attempts for any message. The value must be between 1 and 100. The
    default value for this field is 5."""

    min_retry_delay: Optional[str] = Field(default=UNSET, alias="minRetryDelay")
    """Optional. The minimum amount of seconds to wait between retry attempts. The value must be between 1 and 600. The
    default value for this field is 5."""


class GoogleCloudEventarcV1PipelineRetryPolicyDict(TypedDict):
    max_retry_delay: NotRequired[str]
    max_attempts: NotRequired[int]
    min_retry_delay: NotRequired[str]
