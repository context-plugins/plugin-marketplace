from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.extractor_type import ExtractorTypeOrStr


class Extractor(SdkBaseModel):
    """A model that extracts structured data fields from a document"""

    id: Optional[str] = UNSET
    """Unique identifier of the extractor"""

    name: Optional[str] = UNSET
    """Display name of the extractor"""

    document_type: Optional[str] = Field(default=UNSET, alias="documentType")
    """Document type this extractor is designed for"""

    extractor_type: Optional[ExtractorTypeOrStr] = Field(default=UNSET, alias="extractorType")
    """Technology category of the extractor model"""


class ExtractorDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    document_type: NotRequired[str]
    extractor_type: NotRequired[ExtractorTypeOrStr]
