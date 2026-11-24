from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Secret(SdkBaseModel):
    """Secret provides a reference to entries in Secret Manager."""

    secret_version: Optional[str] = Field(default=UNSET, alias="secretVersion")
    """Required. The resource name of the secret version in the format, format as:
    ``projects/*/secrets/*/versions/*``."""


class GoogleCloudApihubV1SecretDict(TypedDict):
    secret_version: NotRequired[str]
