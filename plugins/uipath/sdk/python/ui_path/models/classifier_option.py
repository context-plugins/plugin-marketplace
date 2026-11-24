from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ClassifierOption(SdkBaseModel):
    """Configuration for applying a specific classifier"""

    classifier_id: str = Field(alias="classifierId")
    """Unique identifier of the classifier to apply"""


class ClassifierOptionDict(TypedDict):
    classifier_id: str
