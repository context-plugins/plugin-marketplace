from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FaceOccluded(SdkBaseModel):
    value: Optional[bool] = Field(default=UNSET, alias="Value")
    """True if a detected face’s eyes, nose, and mouth are partially captured or if they are covered by masks, dark
    sunglasses, cell phones, hands, or other objects. False if common occurrences that do not impact face verification
    are detected, such as eye glasses, lightly tinted sunglasses, strands of hair, and others."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that the service has detected the presence of a face occlusion."""


class FaceOccludedDict(TypedDict):
    value: NotRequired[bool]
    confidence: NotRequired[float]
