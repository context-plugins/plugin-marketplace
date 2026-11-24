from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type2 import Type2OrStr
from .google_cloud_apigee_v1_certificate2 import GoogleCloudApigeeV1Certificate2, GoogleCloudApigeeV1Certificate2Dict


class GoogleCloudApigeeV1Alias(SdkBaseModel):
    """Reference to a certificate or key/certificate pair."""

    alias: Optional[str] = UNSET
    """Resource ID for this alias. Values must match the regular expression ``[^/]{1,255}``."""

    type_: Optional[Type2OrStr] = Field(default=UNSET, alias="type")
    """Type of alias."""

    certs_info: Optional[GoogleCloudApigeeV1Certificate2] = Field(default=UNSET, alias="certsInfo")
    """Chain of certificates under this alias."""


class GoogleCloudApigeeV1AliasDict(TypedDict):
    alias: NotRequired[str]
    type_: NotRequired[Type2OrStr]
    certs_info: NotRequired[GoogleCloudApigeeV1Certificate2Dict]
