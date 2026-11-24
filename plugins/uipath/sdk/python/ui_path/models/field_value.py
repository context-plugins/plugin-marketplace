from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.text_type import TextTypeOrStr


class FieldValue(SdkBaseModel):
    """The extracted value with confidence and source reference"""

    value: Optional[Any] = Field(default=UNSET, alias="Value")
    """Extracted value, which may be a string, number, or object depending on field type"""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Confidence score for the extracted value (0.0 to 1.0)"""

    ocr_confidence: Optional[float] = Field(default=UNSET, alias="OcrConfidence")
    """OCR confidence score for the text underlying this value"""

    text_type: Optional[TextTypeOrStr] = Field(default=UNSET, alias="TextType")
    """Whether the source text was printed or handwritten"""


class FieldValueDict(TypedDict):
    value: NotRequired[Any]
    confidence: NotRequired[float]
    ocr_confidence: NotRequired[float]
    text_type: NotRequired[TextTypeOrStr]
