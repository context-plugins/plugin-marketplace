from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsCertificateManagerTagApi(str, Enum):
    CERTIFICATE_MANAGER_REMOVE_TAGS_FROM_CERTIFICATE = "CertificateManager.RemoveTagsFromCertificate"

    __str__ = str.__str__


XAmzTarget3AwsCertificateManagerTagApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsCertificateManagerTagApi | str, open_enum_validator(XAmzTarget3AwsCertificateManagerTagApi)
]
