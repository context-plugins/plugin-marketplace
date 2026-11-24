from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .adaptive_mt_file2 import AdaptiveMtFile2, AdaptiveMtFile2Dict


class ImportAdaptiveMtFileResponse(SdkBaseModel):
    """The response for importing an AdaptiveMtFile"""

    adaptive_mt_file: Optional[AdaptiveMtFile2] = Field(default=UNSET, alias="adaptiveMtFile")
    """Output only. The Adaptive MT file that was imported."""


class ImportAdaptiveMtFileResponseDict(TypedDict):
    adaptive_mt_file: NotRequired[AdaptiveMtFile2Dict]
