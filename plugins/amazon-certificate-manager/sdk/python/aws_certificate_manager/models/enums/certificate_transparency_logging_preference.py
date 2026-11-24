from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CertificateTransparencyLoggingPreference(str, Enum):
    """This parameter has been deprecated. Certificate transparency logging opt-out is no longer available. All public
    certificates are recorded in a certificate transparency log."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


CertificateTransparencyLoggingPreferenceOrStr: TypeAlias = Annotated[
    CertificateTransparencyLoggingPreference | str, open_enum_validator(CertificateTransparencyLoggingPreference)
]
