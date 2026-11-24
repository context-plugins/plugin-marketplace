from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ServiceIssuersMapping(SdkBaseModel):
    service: Optional[str] = UNSET
    """String indicating the Apigee service name."""

    email_ids: Optional[list[str]] = Field(default=UNSET, alias="emailIds")
    """List of trusted issuer email ids."""


class GoogleCloudApigeeV1ServiceIssuersMappingDict(TypedDict):
    service: NotRequired[str]
    email_ids: NotRequired[list[str]]
