from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsCertificateManagerOperationsApi(str, Enum):
    CERTIFICATE_MANAGER_PUT_ACCOUNT_CONFIGURATION = "CertificateManager.PutAccountConfiguration"

    __str__ = str.__str__


XAmzTarget4AwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsCertificateManagerOperationsApi | str,
    open_enum_validator(XAmzTarget4AwsCertificateManagerOperationsApi),
]
