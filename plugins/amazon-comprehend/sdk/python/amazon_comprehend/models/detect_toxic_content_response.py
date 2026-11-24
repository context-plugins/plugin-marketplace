from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .toxic_labels import ToxicLabels, ToxicLabelsDict


class DetectToxicContentResponse(SdkBaseModel):
    result_list: Optional[list[ToxicLabels]] = Field(default=UNSET, alias="ResultList")
    """Results of the content moderation analysis. Each entry in the results list contains a list of toxic content types
    identified in the text, along with a confidence score for each content type. The results list also includes a
    toxicity score for each entry in the results list."""


class DetectToxicContentResponseDict(TypedDict):
    result_list: NotRequired[list[ToxicLabelsDict]]
