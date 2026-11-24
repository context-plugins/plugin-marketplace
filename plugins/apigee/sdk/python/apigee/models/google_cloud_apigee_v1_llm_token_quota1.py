from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1LlmTokenQuota1(SdkBaseModel):
    """Required. LLM token Quota parameters to be enforced for the resources, methods, and API source & LLM model
    combination. If none are specified, quota enforcement will not be done."""

    limit: Optional[str] = UNSET
    """Required. Upper limit of LLM tokens allowed for the time interval and time unit specified. Requests exceeding
    this limit will be rejected."""

    interval: Optional[str] = UNSET
    """Required. Time interval over which the number of request messages is calculated."""

    time_unit: Optional[str] = Field(default=UNSET, alias="timeUnit")
    """Optional. Time unit defined for the ``interval``. Valid values include ``minute``, ``hour``, ``day``, or
    ``month``. If ``limit`` and ``interval`` are valid, the default value is ``hour``; otherwise, the default is
    null."""


class GoogleCloudApigeeV1LlmTokenQuota1Dict(TypedDict):
    limit: NotRequired[str]
    interval: NotRequired[str]
    time_unit: NotRequired[str]
