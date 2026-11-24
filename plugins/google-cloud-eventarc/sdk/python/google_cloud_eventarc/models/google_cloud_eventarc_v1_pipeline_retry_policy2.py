from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudEventarcV1PipelineRetryPolicy2(SdkBaseModel):
    """Optional. The retry policy to use in the pipeline."""

    max_retry_delay: Optional[str] = Field(default=UNSET, alias="maxRetryDelay")
    """Optional. The maximum amount of seconds to wait between retry attempts. The value must be between 1 and 600. The
    default value for this field is 60."""

    max_attempts: Optional[int] = Field(default=UNSET, alias="maxAttempts")
    """Optional. The maximum number of delivery attempts for any message. The value must be between 1 and 100. The
    default value for this field is 5."""

    min_retry_delay: Optional[str] = Field(default=UNSET, alias="minRetryDelay")
    """Optional. The minimum amount of seconds to wait between retry attempts. The value must be between 1 and 600. The
    default value for this field is 5."""


class GoogleCloudEventarcV1PipelineRetryPolicy2Dict(TypedDict):
    max_retry_delay: NotRequired[str]
    max_attempts: NotRequired[int]
    min_retry_delay: NotRequired[str]
