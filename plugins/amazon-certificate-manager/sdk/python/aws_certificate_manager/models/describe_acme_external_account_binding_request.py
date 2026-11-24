from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeAcmeExternalAccountBindingRequest(SdkBaseModel):
    acme_external_account_binding_arn: str = Field(alias="AcmeExternalAccountBindingArn")
    """The Amazon Resource Name (ARN) of the ACME external account binding."""


class DescribeAcmeExternalAccountBindingRequestDict(TypedDict):
    acme_external_account_binding_arn: str
