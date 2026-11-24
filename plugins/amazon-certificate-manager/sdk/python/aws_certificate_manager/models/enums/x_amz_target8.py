from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget8(str, Enum):
    CERTIFICATE_MANAGER_REQUEST_CERTIFICATE = "CertificateManager.RequestCertificate"

    __str__ = str.__str__


XAmzTarget8OrStr: TypeAlias = Annotated[XAmzTarget8 | str, open_enum_validator(XAmzTarget8)]
