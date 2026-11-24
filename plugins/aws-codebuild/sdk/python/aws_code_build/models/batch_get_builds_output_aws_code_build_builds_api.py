from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build import Build, BuildDict


class BatchGetBuildsOutputAwsCodeBuildBuildsApi(SdkBaseModel):
    builds: Optional[list[Build]] = UNSET
    """Information about the requested builds."""

    builds_not_found: Optional[list[str]] = Field(default=UNSET, alias="buildsNotFound")
    """The IDs of builds for which information could not be found."""


class BatchGetBuildsOutputAwsCodeBuildBuildsApiDict(TypedDict):
    builds: NotRequired[list[BuildDict]]
    builds_not_found: NotRequired[list[str]]
