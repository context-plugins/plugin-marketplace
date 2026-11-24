from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .extractor import Extractor, ExtractorDict


class ProjectsExtractorsResponse(SdkBaseModel):
    extractors: Optional[list[Extractor]] = UNSET


class ProjectsExtractorsResponseDict(TypedDict):
    extractors: NotRequired[list[ExtractorDict]]
