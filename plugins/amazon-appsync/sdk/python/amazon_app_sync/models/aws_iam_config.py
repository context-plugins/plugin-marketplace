from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AwsIamConfig(SdkBaseModel):
    signing_region: Optional[str] = Field(default=UNSET, alias="signingRegion")
    """The signing Amazon Web Services Region for IAM authorization."""

    signing_service_name: Optional[str] = Field(default=UNSET, alias="signingServiceName")
    """The signing service name for IAM authorization."""


class AwsIamConfigDict(TypedDict):
    signing_region: NotRequired[str]
    signing_service_name: NotRequired[str]
