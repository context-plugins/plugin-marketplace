from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RetryPolicy2(SdkBaseModel):
    """Optional. The retry policy to use in the Trigger. If unset, event delivery will be retried for up to 24 hours by
    default: https://cloud.google.com/eventarc/docs/retry-events"""

    max_attempts: Optional[int] = Field(default=UNSET, alias="maxAttempts")
    """Optional. The maximum number of delivery attempts for any message. The only valid value is 1."""


class RetryPolicy2Dict(TypedDict):
    max_attempts: NotRequired[int]
