from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4(str, Enum):
    CERTIFICATE_MANAGER_UPDATE_ACME_DOMAIN_VALIDATION = "CertificateManager.UpdateAcmeDomainValidation"

    __str__ = str.__str__


XAmzTarget4OrStr: TypeAlias = Annotated[XAmzTarget4 | str, open_enum_validator(XAmzTarget4)]
