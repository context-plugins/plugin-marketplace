from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1LlmTokenQuota(SdkBaseModel):
    """LLM Token Quota contains the essential parameters needed that can be applied on the resources, methods, models,
    API source combination associated with this API product. While LLM Token Quota is optional, setting it prevents
    requests from exceeding the provisioned parameters."""

    limit: Optional[str] = UNSET
    """Required. Upper limit of LLM tokens allowed for the time interval and time unit specified. Requests exceeding
    this limit will be rejected."""

    interval: Optional[str] = UNSET
    """Required. Time interval over which the number of request messages is calculated."""

    time_unit: Optional[str] = Field(default=UNSET, alias="timeUnit")
    """Optional. Time unit defined for the ``interval``. Valid values include ``minute``, ``hour``, ``day``, or
    ``month``. If ``limit`` and ``interval`` are valid, the default value is ``hour``; otherwise, the default is
    null."""


class GoogleCloudApigeeV1LlmTokenQuotaDict(TypedDict):
    limit: NotRequired[str]
    interval: NotRequired[str]
    time_unit: NotRequired[str]
