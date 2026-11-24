from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_insights_api import TypeInsightsApiOrStr
from .unions.data_insights_api import DataInsightsApi, DataInsightsApiDict


class PostInsightsRequest(SdkBaseModel):
    users: list[UUID]
    """Array of user IDs to generate the insight for. Minimum 1, maximum 10 users."""

    type_: TypeInsightsApiOrStr = Field(alias="type")
    """The type of insight to generate."""

    data: DataInsightsApi
    """Input data for the insight. The required fields vary by ``type``."""


class PostInsightsRequestDict(TypedDict):
    users: list[UUID]
    type_: TypeInsightsApiOrStr
    data: DataInsightsApiDict
