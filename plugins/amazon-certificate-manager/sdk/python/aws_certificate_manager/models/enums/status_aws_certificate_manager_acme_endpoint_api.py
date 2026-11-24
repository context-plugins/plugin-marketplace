from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAwsCertificateManagerAcmeEndpointApi(str, Enum):
    """The status of the ACME endpoint."""

    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    FAILED = "FAILED"

    __str__ = str.__str__


StatusAwsCertificateManagerAcmeEndpointApiOrStr: TypeAlias = Annotated[
    StatusAwsCertificateManagerAcmeEndpointApi | str, open_enum_validator(StatusAwsCertificateManagerAcmeEndpointApi)
]
