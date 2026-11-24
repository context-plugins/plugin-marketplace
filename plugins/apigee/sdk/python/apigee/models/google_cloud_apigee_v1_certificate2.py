from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_cert_info import GoogleCloudApigeeV1CertInfo, GoogleCloudApigeeV1CertInfoDict


class GoogleCloudApigeeV1Certificate2(SdkBaseModel):
    """Chain of certificates under this alias."""

    cert_info: Optional[list[GoogleCloudApigeeV1CertInfo]] = Field(default=UNSET, alias="certInfo")
    """Chain of certificates under this name."""


class GoogleCloudApigeeV1Certificate2Dict(TypedDict):
    cert_info: NotRequired[list[GoogleCloudApigeeV1CertInfoDict]]
