from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.environment_type import EnvironmentTypeOrStr


class CreateEnvironmentRequest(SdkBaseModel):
    environment_type: EnvironmentTypeOrStr = Field(alias="environmentType")
    """Type of environment to create"""

    country_code: str = Field(alias="countryCode")
    """Country to create the environment within"""

    ring_name: Optional[str] = Field(default=UNSET, alias="ringName")
    """Logical ring group (only Sandbox may be created in Preview ring)"""

    application_version: Optional[str] = Field(default=UNSET, alias="applicationVersion")
    """Application version (e.g., 26.0.0.0)"""


class CreateEnvironmentRequestDict(TypedDict):
    environment_type: EnvironmentTypeOrStr
    country_code: str
    ring_name: NotRequired[str]
    application_version: NotRequired[str]
