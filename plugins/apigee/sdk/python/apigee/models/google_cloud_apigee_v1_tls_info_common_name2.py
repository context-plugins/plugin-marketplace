from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1TlsInfoCommonName2(SdkBaseModel):
    """The TLS Common Name of the certificate."""

    wildcard_match: Optional[bool] = Field(default=UNSET, alias="wildcardMatch")
    """Indicates whether the cert should be matched against as a wildcard cert."""

    value: Optional[str] = UNSET
    """The TLS Common Name string of the certificate."""


class GoogleCloudApigeeV1TlsInfoCommonName2Dict(TypedDict):
    wildcard_match: NotRequired[bool]
    value: NotRequired[str]
