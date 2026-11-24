from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineConfig(SdkBaseModel):
    functions: Optional[list[str]] = UNSET
    """A list of Function objects."""


class PipelineConfigDict(TypedDict):
    functions: NotRequired[list[str]]
