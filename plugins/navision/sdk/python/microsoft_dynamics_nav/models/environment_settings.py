from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .update_window import UpdateWindow, UpdateWindowDict


class EnvironmentSettings(SdkBaseModel):
    app_insights_key: Optional[str] = Field(default=UNSET, alias="appInsightsKey")
    """Application Insights instrumentation key"""

    update_window: Optional[UpdateWindow] = Field(default=UNSET, alias="updateWindow")
    security_group_id: Optional[UUID] = Field(default=UNSET, alias="securityGroupId")
    """Security group assigned to the environment"""


class EnvironmentSettingsDict(TypedDict):
    app_insights_key: NotRequired[str]
    update_window: NotRequired[UpdateWindowDict]
    security_group_id: NotRequired[UUID]
