from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classifier import Classifier, ClassifierDict


class ProjectsClassifiersResponse(SdkBaseModel):
    classifiers: Optional[list[Classifier]] = UNSET


class ProjectsClassifiersResponseDict(TypedDict):
    classifiers: NotRequired[list[ClassifierDict]]
