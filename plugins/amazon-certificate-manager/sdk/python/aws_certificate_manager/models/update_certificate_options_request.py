from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .certificate_options_aws_certificate_manager_operations_api import (
    CertificateOptionsAwsCertificateManagerOperationsApi,
    CertificateOptionsAwsCertificateManagerOperationsApiDict,
)


class UpdateCertificateOptionsRequest(SdkBaseModel):
    certificate_arn: str = Field(alias="CertificateArn")
    """ARN of the requested certificate to update. This must be of the form:
    arn:aws:acm:us-east-1:account:certificate/12345678-1234-1234-1234-123456789012"""

    options: CertificateOptionsAwsCertificateManagerOperationsApi = Field(alias="Options")


class UpdateCertificateOptionsRequestDict(TypedDict):
    certificate_arn: str
    options: CertificateOptionsAwsCertificateManagerOperationsApiDict
