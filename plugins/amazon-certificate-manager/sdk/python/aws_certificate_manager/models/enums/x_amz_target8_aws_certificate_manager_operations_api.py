from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget8AwsCertificateManagerOperationsApi(str, Enum):
    CERTIFICATE_MANAGER_UNTAG_RESOURCE = "CertificateManager.UntagResource"

    __str__ = str.__str__


XAmzTarget8AwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget8AwsCertificateManagerOperationsApi | str,
    open_enum_validator(XAmzTarget8AwsCertificateManagerOperationsApi),
]
