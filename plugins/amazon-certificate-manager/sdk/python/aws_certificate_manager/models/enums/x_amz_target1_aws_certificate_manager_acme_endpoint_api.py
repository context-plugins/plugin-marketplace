from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCertificateManagerAcmeEndpointApi(str, Enum):
    CERTIFICATE_MANAGER_DELETE_ACME_ENDPOINT = "CertificateManager.DeleteAcmeEndpoint"

    __str__ = str.__str__


XAmzTarget1AwsCertificateManagerAcmeEndpointApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCertificateManagerAcmeEndpointApi | str,
    open_enum_validator(XAmzTarget1AwsCertificateManagerAcmeEndpointApi),
]
