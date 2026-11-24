from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class RestorePeriod(SdkBaseModel):
    from_: Optional[RFC3339DateTime] = Field(default=UNSET, alias="from")
    to: Optional[RFC3339DateTime] = UNSET
    corresponding_application_package_version: Optional[str] = Field(
        default=UNSET, alias="correspondingApplicationPackageVersion"
    )


class RestorePeriodDict(TypedDict):
    from_: NotRequired[RFC3339DateTime]
    to: NotRequired[RFC3339DateTime]
    corresponding_application_package_version: NotRequired[str]
