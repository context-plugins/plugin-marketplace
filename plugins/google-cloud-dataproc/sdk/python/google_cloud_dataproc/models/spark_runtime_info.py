from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SparkRuntimeInfo(SdkBaseModel):
    java_home: Optional[str] = Field(default=UNSET, alias="javaHome")
    java_version: Optional[str] = Field(default=UNSET, alias="javaVersion")
    scala_version: Optional[str] = Field(default=UNSET, alias="scalaVersion")


class SparkRuntimeInfoDict(TypedDict):
    java_home: NotRequired[str]
    java_version: NotRequired[str]
    scala_version: NotRequired[str]
