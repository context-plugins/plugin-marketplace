from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCertificateManagerOperationsApi(str, Enum):
    CERTIFICATE_MANAGER_RESEND_VALIDATION_EMAIL = "CertificateManager.ResendValidationEmail"

    __str__ = str.__str__


XAmzTarget2AwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCertificateManagerOperationsApi | str,
    open_enum_validator(XAmzTarget2AwsCertificateManagerOperationsApi),
]
