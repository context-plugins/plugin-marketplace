from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.certificate_transparency_logging_preference import CertificateTransparencyLoggingPreferenceOrStr
from .enums.export import ExportOrStr
from .enums.validation_method3 import ValidationMethod3OrStr


class CertificateOptions(SdkBaseModel):
    certificate_transparency_logging_preference: Optional[CertificateTransparencyLoggingPreferenceOrStr] = Field(
        default=UNSET, alias="CertificateTransparencyLoggingPreference"
    )
    """This parameter has been deprecated. Certificate transparency logging opt-out is no longer available. All public
    certificates are recorded in a certificate transparency log."""

    export: Optional[ExportOrStr] = Field(default=UNSET, alias="Export")
    """You can opt in to allow the export of your certificates by specifying ENABLED. You cannot update the value of
    Export after the the certificate is created."""

    validation_method: Optional[ValidationMethod3OrStr] = Field(default=UNSET, alias="ValidationMethod")
    """The domain validation method for the certificate. To migrate from email to DNS validation, specify DNS."""


class CertificateOptionsDict(TypedDict):
    certificate_transparency_logging_preference: NotRequired[CertificateTransparencyLoggingPreferenceOrStr]
    export: NotRequired[ExportOrStr]
    validation_method: NotRequired[ValidationMethod3OrStr]
