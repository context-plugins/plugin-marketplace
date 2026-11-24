from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TaskResourceRequest(SdkBaseModel):
    """Resources used per task created by the application."""

    resource_name: Optional[str] = Field(default=UNSET, alias="resourceName")
    amount: Optional[float] = UNSET


class TaskResourceRequestDict(TypedDict):
    resource_name: NotRequired[str]
    amount: NotRequired[float]
