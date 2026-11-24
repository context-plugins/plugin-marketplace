from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RetryPolicy(SdkBaseModel):
    """The retry policy configuration for the Trigger. Can only be set with Cloud Run destinations."""

    max_attempts: Optional[int] = Field(default=UNSET, alias="maxAttempts")
    """Optional. The maximum number of delivery attempts for any message. The only valid value is 1."""


class RetryPolicyDict(TypedDict):
    max_attempts: NotRequired[int]
