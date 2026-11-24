from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .extracted_field import ExtractedField, ExtractedFieldDict


class ExtractionResultData(SdkBaseModel):
    """Structured extraction result containing field values and confidence scores"""

    results_version: Optional[int] = Field(default=UNSET, alias="ResultsVersion")
    """Version of the extraction results format"""

    document_id: Optional[str] = Field(default=UNSET, alias="DocumentId")
    """Document identifier of the extracted document"""

    fields: Optional[list[ExtractedField]] = Field(default=UNSET, alias="Fields")
    """List of extracted field values"""


class ExtractionResultDataDict(TypedDict):
    results_version: NotRequired[int]
    document_id: NotRequired[str]
    fields: NotRequired[list[ExtractedFieldDict]]
