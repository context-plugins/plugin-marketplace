from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BillingDetails(SdkBaseModel):
    billed_memory_used_in_mb: Optional[int] = Field(default=UNSET, alias="billedMemoryUsedInMB")
    """Billed memory consumption of your workflow, in MB."""

    billed_duration_in_milliseconds: Optional[int] = Field(default=UNSET, alias="billedDurationInMilliseconds")
    """Billed duration of your workflow, in milliseconds."""


class BillingDetailsDict(TypedDict):
    billed_memory_used_in_mb: NotRequired[int]
    billed_duration_in_milliseconds: NotRequired[int]
