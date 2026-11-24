from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3(str, Enum):
    CERTIFICATE_MANAGER_LIST_ACME_DOMAIN_VALIDATIONS = "CertificateManager.ListAcmeDomainValidations"

    __str__ = str.__str__


XAmzTarget3OrStr: TypeAlias = Annotated[XAmzTarget3 | str, open_enum_validator(XAmzTarget3)]
