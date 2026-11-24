from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AppSyncRuntime(SdkBaseModel):
    name: Literal["APPSYNC_JS"] = "APPSYNC_JS"
    """The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS."""

    runtime_version: str = Field(alias="runtimeVersion")
    """The version of the runtime to use. Currently, the only allowed version is 1.0.0."""


class AppSyncRuntimeDict(TypedDict):
    name: Literal["APPSYNC_JS"]
    runtime_version: str
