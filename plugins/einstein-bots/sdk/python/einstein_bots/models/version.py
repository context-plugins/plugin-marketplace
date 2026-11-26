from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_einstein_bots_api_beta_versions_api import StatusEinsteinBotsApiBetaVersionsApiOrStr


class Version(SdkBaseModel):
    version_number: Optional[str] = Field(default=UNSET, alias="versionNumber")
    """API Version number."""

    status: Optional[StatusEinsteinBotsApiBetaVersionsApiOrStr] = UNSET
    """API Version status."""


class VersionDict(TypedDict):
    version_number: NotRequired[str]
    status: NotRequired[StatusEinsteinBotsApiBetaVersionsApiOrStr]
