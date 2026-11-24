from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCertificateManagerTagApi(str, Enum):
    CERTIFICATE_MANAGER_ADD_TAGS_TO_CERTIFICATE = "CertificateManager.AddTagsToCertificate"

    __str__ = str.__str__


XAmzTargetAwsCertificateManagerTagApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCertificateManagerTagApi | str, open_enum_validator(XAmzTargetAwsCertificateManagerTagApi)
]
