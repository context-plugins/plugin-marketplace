from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .certificate_filter import CertificateFilter, CertificateFilterDict


class CertificateFilterStatement(SdkBaseModel):
    """Exactly one member is set."""

    and_: Optional[list[CertificateFilterStatement]] = Field(default=UNSET, alias="And")
    """A list of filter statements that must all be true."""

    or_: Optional[list[CertificateFilterStatement]] = Field(default=UNSET, alias="Or")
    """A list of filter statements where at least one must be true."""

    not_: Optional[CertificateFilterStatement] = Field(default=UNSET, alias="Not")
    """Exactly one member is set."""

    filter: Optional[CertificateFilter] = Field(default=UNSET, alias="Filter")
    """Exactly one member is set."""


class CertificateFilterStatementDict(TypedDict):
    and_: NotRequired[list[CertificateFilterStatementDict]]
    or_: NotRequired[list[CertificateFilterStatementDict]]
    not_: NotRequired[CertificateFilterStatementDict]
    filter: NotRequired[CertificateFilterDict]
