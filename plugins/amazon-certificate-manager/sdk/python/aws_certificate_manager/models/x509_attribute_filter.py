from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.extended_key_usage1 import ExtendedKeyUsage1OrStr
from .enums.key_algorithm1 import KeyAlgorithm1OrStr
from .enums.key_usage1 import KeyUsage1OrStr
from .subject_alternative_name_filter import SubjectAlternativeNameFilter, SubjectAlternativeNameFilterDict
from .subject_filter import SubjectFilter, SubjectFilterDict
from .timestamp_range import TimestampRange, TimestampRangeDict


class X509AttributeFilter(SdkBaseModel):
    """Exactly one member is set."""

    subject: Optional[SubjectFilter] = Field(default=UNSET, alias="Subject")
    """Exactly one member is set."""

    subject_alternative_name: Optional[SubjectAlternativeNameFilter] = Field(
        default=UNSET, alias="SubjectAlternativeName"
    )
    """Exactly one member is set."""

    extended_key_usage: Optional[ExtendedKeyUsage1OrStr] = Field(default=UNSET, alias="ExtendedKeyUsage")
    """Filter by extended key usage."""

    key_usage: Optional[KeyUsage1OrStr] = Field(default=UNSET, alias="KeyUsage")
    """Filter by key usage."""

    key_algorithm: Optional[KeyAlgorithm1OrStr] = Field(default=UNSET, alias="KeyAlgorithm")
    """Filter by key algorithm."""

    serial_number: Optional[str] = Field(default=UNSET, alias="SerialNumber")
    """Filter by serial number."""

    not_after: Optional[TimestampRange] = Field(default=UNSET, alias="NotAfter")
    not_before: Optional[TimestampRange] = Field(default=UNSET, alias="NotBefore")


class X509AttributeFilterDict(TypedDict):
    subject: NotRequired[SubjectFilterDict]
    subject_alternative_name: NotRequired[SubjectAlternativeNameFilterDict]
    extended_key_usage: NotRequired[ExtendedKeyUsage1OrStr]
    key_usage: NotRequired[KeyUsage1OrStr]
    key_algorithm: NotRequired[KeyAlgorithm1OrStr]
    serial_number: NotRequired[str]
    not_after: NotRequired[TimestampRangeDict]
    not_before: NotRequired[TimestampRangeDict]
