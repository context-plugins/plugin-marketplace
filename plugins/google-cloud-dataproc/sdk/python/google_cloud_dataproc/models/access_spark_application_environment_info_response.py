from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .application_environment_info import ApplicationEnvironmentInfo, ApplicationEnvironmentInfoDict


class AccessSparkApplicationEnvironmentInfoResponse(SdkBaseModel):
    """Environment details of a Saprk Application."""

    application_environment_info: Optional[ApplicationEnvironmentInfo] = Field(
        default=UNSET, alias="applicationEnvironmentInfo"
    )
    """Details about the Environment that the application is running in."""


class AccessSparkApplicationEnvironmentInfoResponseDict(TypedDict):
    application_environment_info: NotRequired[ApplicationEnvironmentInfoDict]
