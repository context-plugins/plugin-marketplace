from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.classifier_type import ClassifierTypeOrStr


class Classifier(SdkBaseModel):
    """A model that classifies documents into predefined document types"""

    id: Optional[str] = UNSET
    """Unique identifier of the classifier"""

    name: Optional[str] = UNSET
    """Display name of the classifier"""

    classifier_type: Optional[ClassifierTypeOrStr] = Field(default=UNSET, alias="classifierType")
    """Technology category of the classifier model"""

    document_types: Optional[list[str]] = Field(default=UNSET, alias="documentTypes")
    """List of document type labels this classifier can identify"""


class ClassifierDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    classifier_type: NotRequired[ClassifierTypeOrStr]
    document_types: NotRequired[list[str]]
