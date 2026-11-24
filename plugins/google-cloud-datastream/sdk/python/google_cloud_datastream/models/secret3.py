from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Secret3(SdkBaseModel):
    """Required. Specifies the OAuth Refresh Token."""

    raw_value: Optional[str] = Field(default=UNSET, alias="rawValue")
    """Optional. Input only. The actual raw value of the secret as plain text."""

    secret_version: Optional[str] = Field(default=UNSET, alias="secretVersion")
    """Optional. A Secret Manager resource name storing the actual value of the secret. Supported formats: *
    projects/{project}/locations/{location}/secrets/{secret}/versions/{version} *
    projects/{project}/secrets/{secret}/versions/{version}"""


class Secret3Dict(TypedDict):
    raw_value: NotRequired[str]
    secret_version: NotRequired[str]
