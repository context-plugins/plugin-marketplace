from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Secret3(SdkBaseModel):
    """Required. Secret version reference containing the password. The ``secretmanager.versions.access`` permission
    should be granted to the service account accessing the secret."""

    secret_version: Optional[str] = Field(default=UNSET, alias="secretVersion")
    """Required. The resource name of the secret version in the format, format as:
    ``projects/*/secrets/*/versions/*``."""


class GoogleCloudApihubV1Secret3Dict(TypedDict):
    secret_version: NotRequired[str]
