from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_classification_config import DocumentClassificationConfig, DocumentClassificationConfigDict
from .entity_recognition_config import EntityRecognitionConfig, EntityRecognitionConfigDict
from .enums.language_code8 import LanguageCode8OrStr


class TaskConfig(SdkBaseModel):
    language_code: LanguageCode8OrStr = Field(alias="LanguageCode")
    """Language code for the language that the model supports."""

    document_classification_config: Optional[DocumentClassificationConfig] = Field(
        default=UNSET, alias="DocumentClassificationConfig"
    )
    entity_recognition_config: Optional[EntityRecognitionConfig] = Field(default=UNSET, alias="EntityRecognitionConfig")


class TaskConfigDict(TypedDict):
    language_code: LanguageCode8OrStr
    document_classification_config: NotRequired[DocumentClassificationConfigDict]
    entity_recognition_config: NotRequired[EntityRecognitionConfigDict]
