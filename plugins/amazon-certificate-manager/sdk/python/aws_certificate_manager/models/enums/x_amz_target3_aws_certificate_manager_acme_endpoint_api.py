from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsCertificateManagerAcmeEndpointApi(str, Enum):
    CERTIFICATE_MANAGER_LIST_ACME_ENDPOINTS = "CertificateManager.ListAcmeEndpoints"

    __str__ = str.__str__


XAmzTarget3AwsCertificateManagerAcmeEndpointApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsCertificateManagerAcmeEndpointApi | str,
    open_enum_validator(XAmzTarget3AwsCertificateManagerAcmeEndpointApi),
]
