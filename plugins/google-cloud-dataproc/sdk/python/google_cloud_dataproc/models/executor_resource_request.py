from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExecutorResourceRequest(SdkBaseModel):
    """Resources used per executor used by the application."""

    vendor: Optional[str] = UNSET
    resource_name: Optional[str] = Field(default=UNSET, alias="resourceName")
    amount: Optional[str] = UNSET
    discovery_script: Optional[str] = Field(default=UNSET, alias="discoveryScript")


class ExecutorResourceRequestDict(TypedDict):
    vendor: NotRequired[str]
    resource_name: NotRequired[str]
    amount: NotRequired[str]
    discovery_script: NotRequired[str]
