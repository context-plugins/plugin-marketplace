from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiEvaluateDataStandardScopeResponse(SdkBaseModel):
    data_standard_id: Optional[str] = Field(default=UNSET, alias="dataStandardId")
    dataset_ids: Optional[list[str]] = Field(default=UNSET, alias="datasetIds")


class PublicApiEvaluateDataStandardScopeResponseDict(TypedDict):
    data_standard_id: NotRequired[str]
    dataset_ids: NotRequired[list[str]]
