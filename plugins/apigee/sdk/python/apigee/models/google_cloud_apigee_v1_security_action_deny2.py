from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityActionDeny2(SdkBaseModel):
    """Deny a request through if it matches this SecurityAction."""

    response_code: Optional[int] = Field(default=UNSET, alias="responseCode")
    """Optional. The HTTP response code if the Action = DENY."""


class GoogleCloudApigeeV1SecurityActionDeny2Dict(TypedDict):
    response_code: NotRequired[int]
