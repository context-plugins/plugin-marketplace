from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dga_features import DgaFeatures, DgaFeaturesDict


class DgaScore(SdkBaseModel):
    score: Optional[float] = UNSET
    is_dga: Optional[bool] = UNSET
    model: Optional[str] = UNSET
    features: Optional[DgaFeatures] = UNSET
    interpretation: Optional[str] = UNSET


class DgaScoreDict(TypedDict):
    score: NotRequired[float]
    is_dga: NotRequired[bool]
    model: NotRequired[str]
    features: NotRequired[DgaFeaturesDict]
    interpretation: NotRequired[str]
