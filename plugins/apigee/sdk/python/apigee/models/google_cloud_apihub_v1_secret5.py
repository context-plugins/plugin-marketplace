from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Secret5(SdkBaseModel):
    """Optional. The config variable value in case of config variable of type secret."""

    secret_version: Optional[str] = Field(default=UNSET, alias="secretVersion")
    """Required. The resource name of the secret version in the format, format as:
    ``projects/*/secrets/*/versions/*``."""


class GoogleCloudApihubV1Secret5Dict(TypedDict):
    secret_version: NotRequired[str]
