from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .extractor_option import ExtractorOption, ExtractorOptionDict


class ExtractionRequest(SdkBaseModel):
    """Request payload for extracting data from a previously digitized document"""

    document_id: str = Field(alias="documentId")
    """Document ID returned by the digitization endpoint"""

    document_type_id: Optional[str] = Field(default=UNSET, alias="documentTypeId")
    """Document type identifier to guide extraction"""

    extractors_options: list[ExtractorOption] = Field(alias="extractorsOptions")
    """Extractors to apply with their configuration options"""


class ExtractionRequestDict(TypedDict):
    document_id: str
    document_type_id: NotRequired[str]
    extractors_options: list[ExtractorOptionDict]
