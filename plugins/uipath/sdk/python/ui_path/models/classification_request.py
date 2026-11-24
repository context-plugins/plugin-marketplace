from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .classifier_option import ClassifierOption, ClassifierOptionDict


class ClassificationRequest(SdkBaseModel):
    """Request payload for classifying a previously digitized document"""

    document_id: str = Field(alias="documentId")
    """Document ID returned by the digitization endpoint"""

    classifiers_options: list[ClassifierOption] = Field(alias="classifiersOptions")
    """Classifiers to apply with their configuration options"""


class ClassificationRequestDict(TypedDict):
    document_id: str
    classifiers_options: list[ClassifierOptionDict]
