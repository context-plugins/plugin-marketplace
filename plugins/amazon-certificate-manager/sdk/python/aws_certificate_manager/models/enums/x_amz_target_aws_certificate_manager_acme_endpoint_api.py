from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCertificateManagerAcmeEndpointApi(str, Enum):
    CERTIFICATE_MANAGER_CREATE_ACME_ENDPOINT = "CertificateManager.CreateAcmeEndpoint"

    __str__ = str.__str__


XAmzTargetAwsCertificateManagerAcmeEndpointApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCertificateManagerAcmeEndpointApi | str,
    open_enum_validator(XAmzTargetAwsCertificateManagerAcmeEndpointApi),
]
