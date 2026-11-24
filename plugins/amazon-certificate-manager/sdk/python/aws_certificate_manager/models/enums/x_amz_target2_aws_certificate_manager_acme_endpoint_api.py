from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCertificateManagerAcmeEndpointApi(str, Enum):
    CERTIFICATE_MANAGER_DESCRIBE_ACME_ENDPOINT = "CertificateManager.DescribeAcmeEndpoint"

    __str__ = str.__str__


XAmzTarget2AwsCertificateManagerAcmeEndpointApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCertificateManagerAcmeEndpointApi | str,
    open_enum_validator(XAmzTarget2AwsCertificateManagerAcmeEndpointApi),
]
