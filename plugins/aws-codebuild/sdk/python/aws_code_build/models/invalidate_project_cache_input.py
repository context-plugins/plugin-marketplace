from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InvalidateProjectCacheInput(SdkBaseModel):
    project_name: str = Field(alias="projectName")
    """The name of the CodeBuild build project that the cache is reset for."""


class InvalidateProjectCacheInputDict(TypedDict):
    project_name: str
