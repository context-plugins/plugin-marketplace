from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityActionDeny(SdkBaseModel):
    """Message that should be set in case of a Deny Action."""

    response_code: Optional[int] = Field(default=UNSET, alias="responseCode")
    """Optional. The HTTP response code if the Action = DENY."""


class GoogleCloudApigeeV1SecurityActionDenyDict(TypedDict):
    response_code: NotRequired[int]
