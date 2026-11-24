from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Quota2(SdkBaseModel):
    """Optional. Quota parameters to be enforced for the operations and API source combination. If none are specified,
    quota enforcement will not be done unless a quota is defined at the API product level."""

    interval: Optional[str] = UNSET
    """Required. Time interval over which the number of request messages is calculated."""

    time_unit: Optional[str] = Field(default=UNSET, alias="timeUnit")
    """Time unit defined for the ``interval``. Valid values include ``minute``, ``hour``, ``day``, or ``month``. If
    ``limit`` and ``interval`` are valid, the default value is ``hour``; otherwise, the default is null."""

    limit: Optional[str] = UNSET
    """Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will
    be rejected."""


class GoogleCloudApigeeV1Quota2Dict(TypedDict):
    interval: NotRequired[str]
    time_unit: NotRequired[str]
    limit: NotRequired[str]
