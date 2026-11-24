from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RevocationReason(str, Enum):
    """The reason the certificate was revoked. This value exists only when the certificate status is REVOKED."""

    UNSPECIFIED = "UNSPECIFIED"
    KEY_COMPROMISE = "KEY_COMPROMISE"
    CA_COMPROMISE = "CA_COMPROMISE"
    AFFILIATION_CHANGED = "AFFILIATION_CHANGED"
    SUPERCEDED = "SUPERCEDED"
    SUPERSEDED = "SUPERSEDED"
    CESSATION_OF_OPERATION = "CESSATION_OF_OPERATION"
    CERTIFICATE_HOLD = "CERTIFICATE_HOLD"
    REMOVE_FROM_CRL = "REMOVE_FROM_CRL"
    PRIVILEGE_WITHDRAWN = "PRIVILEGE_WITHDRAWN"
    A_A_COMPROMISE = "A_A_COMPROMISE"

    __str__ = str.__str__


RevocationReasonOrStr: TypeAlias = Annotated[RevocationReason | str, open_enum_validator(RevocationReason)]
