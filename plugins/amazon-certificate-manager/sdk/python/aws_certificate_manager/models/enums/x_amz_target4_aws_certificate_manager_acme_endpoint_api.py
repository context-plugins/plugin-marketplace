from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsCertificateManagerAcmeEndpointApi(str, Enum):
    CERTIFICATE_MANAGER_UPDATE_ACME_ENDPOINT = "CertificateManager.UpdateAcmeEndpoint"

    __str__ = str.__str__


XAmzTarget4AwsCertificateManagerAcmeEndpointApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsCertificateManagerAcmeEndpointApi | str,
    open_enum_validator(XAmzTarget4AwsCertificateManagerAcmeEndpointApi),
]
