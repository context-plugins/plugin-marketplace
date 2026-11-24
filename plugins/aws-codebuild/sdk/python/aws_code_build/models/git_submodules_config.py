from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GitSubmodulesConfig(SdkBaseModel):
    fetch_submodules: bool = Field(alias="fetchSubmodules")
    """Set to true to fetch Git submodules for your CodeBuild build project."""


class GitSubmodulesConfigDict(TypedDict):
    fetch_submodules: bool
