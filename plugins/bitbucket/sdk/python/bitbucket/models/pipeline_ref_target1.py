from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .commit import Commit, CommitDict
from .enums.ref_type import RefTypeOrStr
from .pipeline_selector import PipelineSelector, PipelineSelectorDict


class PipelineRefTarget1(SdkBaseModel):
    """All Of object, pipeline_ref_target1."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    ref_type: Optional[RefTypeOrStr] = UNSET
    """The type of reference (branch/tag)."""

    ref_name: Optional[str] = UNSET
    """The name of the reference."""

    commit: Optional[Commit] = UNSET
    selector: Optional[PipelineSelector] = UNSET


class PipelineRefTarget1Dict(TypedDict):
    type_: NotRequired[str]
    ref_type: NotRequired[RefTypeOrStr]
    ref_name: NotRequired[str]
    commit: NotRequired[CommitDict]
    selector: NotRequired[PipelineSelectorDict]
