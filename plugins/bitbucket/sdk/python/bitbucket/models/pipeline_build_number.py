from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineBuildNumber(SdkBaseModel):
    """All Of object, pipeline_build_number."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    next: Optional[int] = UNSET
    """The next number that will be used as build number."""


class PipelineBuildNumberDict(TypedDict):
    type_: NotRequired[str]
    next: NotRequired[int]
