from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Secret2(SdkBaseModel):
    """Required. The name of the SecretManager secret version resource storing the API key. Format:
    ``projects/{project}/secrets/{secrete}/versions/{version}``. The ``secretmanager.versions.access`` permission should
    be granted to the service account accessing the secret."""

    secret_version: Optional[str] = Field(default=UNSET, alias="secretVersion")
    """Required. The resource name of the secret version in the format, format as:
    ``projects/*/secrets/*/versions/*``."""


class GoogleCloudApihubV1Secret2Dict(TypedDict):
    secret_version: NotRequired[str]
